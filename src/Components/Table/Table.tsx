import React from 'react'
import { StyledTable, StyledWrapper, StyledHeader } from './Table.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Search } from '../Search/Search'
import { TitleSvg } from '../../Assets/TitleSvg'

export const Table = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <TitleSvg />
        <Search />
      </StyledHeader>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <button>
                <div>
                  <p>Id</p>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
              </button>
            </th>
            <th>
              <button>
                <div>
                  <p>Name</p>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
              </button>
            </th>
            <th>
              <button>
                <div>
                  <p>City</p>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
              </button>
            </th>
            <th>
              <button>
                <div>
                  <p>Total incomes</p>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
              </button>
            </th>
            <th>
              <button>
                <div>
                  <p>Avarage incomes</p>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
              </button>
            </th>
            <th>
              <button>
                <div>
                  <p>Avarage incomes</p>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Boehm - Crist</td>
            <td>Pozdro600</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <span>Robel, Nicolas and McKenzie</span>
            </td>
            <td>Port Heidifurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cormier and Sons</td>
            <td>Port Earlene</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anderson, Champlin and Bartell</td>
            <td>Jaydefurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Boehm - Crist</td>
            <td>Weimannhaven</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Robel, Nicolas and McKenzie</td>
            <td>Port Heidifurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cormier and Sons</td>
            <td>Port Earlene</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anderson, Champlin and Bartell</td>
            <td>Jaydefurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Boehm - Crist</td>
            <td>Weimannhaven</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Robel, Nicolas and McKenzie</td>
            <td>Port Heidifurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cormier and Sons</td>
            <td>Port Earlene</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anderson, Champlin and Bartell</td>
            <td>Jaydefurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Boehm - Crist</td>
            <td>Weimannhaven</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Robel, Nicolas and McKenzie</td>
            <td>Port Heidifurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cormier and Sons</td>
            <td>Port Earlene</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anderson, Champlin and Bartell</td>
            <td>Jaydefurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Boehm - Crist</td>
            <td>Weimannhaven</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Robel, Nicolas and McKenzie</td>
            <td>Port Heidifurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cormier and Sons</td>
            <td>Port Earlene</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anderson, Champlin and Bartell</td>
            <td>Jaydefurt</td>
            <td>100000</td>
            <td>3000</td>
            <td>30000</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledWrapper>
  )
}
