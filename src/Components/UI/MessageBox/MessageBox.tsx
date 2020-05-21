import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faFrown } from '@fortawesome/free-solid-svg-icons'

import { MessageType } from '../../../Types/Enums/EnumsList'
import { MessageBoxWrapper } from './MessageBox.styles'

import { useTransition, animated } from 'react-spring'

interface IDetailProps {
  messageType?: {
    text: string
    type: MessageType
  } | null
  isMessageBoxVisible: boolean
}

const MessageBox: React.FC<IDetailProps> = (props) => {
  const transition = useTransition(props.isMessageBoxVisible, null, {
    from: { transform: 'translate3d(0,-10px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1 },
    leave: { opacity: 0 },
  })

  let icon = null
  if (props.messageType !== null) {
    if (props.messageType!.type === MessageType.GOOD) {
      icon = <FontAwesomeIcon icon={faSmileBeam} />
    } else {
      icon = <FontAwesomeIcon icon={faFrown} />
    }
  }

  const messageBox = (
    <MessageBoxWrapper isGood={props.messageType?.type === MessageType.GOOD ? true : false}>
      <h4>
        {props.messageType!.text}
        {icon}
      </h4>
    </MessageBoxWrapper>
  )

  const showMessage = transition.map(({ item, key, props }) => {
    return (
      item && (
        <animated.div key={key} style={props}>
          {messageBox}
        </animated.div>
      )
    )
  })

  return <>{showMessage}</>
}

export default MessageBox
