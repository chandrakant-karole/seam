import React from 'react'
import '../../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library, } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { ProgressBar, Table } from 'react-bootstrap';
// import TokenImg from '../../assets/images/token.png'
import Graph from '../../assets/images/graph.svg'
import TokenImag from '../../assets/images/token.png'

const Token: React.FC = () => {
  return (
    <>
      <div className="trendingDiv_top">
        {/* <h1 className='token_H1'>Trending</h1> */}
        <ul>
          <li className='token_H1'>Trending</li>
          <li><span style={{ color: '#f6d775' }}>#1</span> demo</li>
          <li><span style={{ color: '#f6d775' }}>#2</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#3</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#4</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#5</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#6</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#7</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#8</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#9</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#10</span> demo</li>
        </ul>
      </div>

      {/* Main section of Trending Component */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="trendingList_Div">
              <div className="trendingList_Head mb-4">
                <h1><FontAwesomeIcon icon={faChartLine} /> Trending List</h1>
              </div>
              <div className="trendingList_table">
                <Table responsive="sm" style={{ fontSize: '14px', color: "#ffc600" }}>
                  <thead>
                    <tr>
                      <th><span style={{ display: "none" }}>.</span></th>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th className='mob-display' scope="col">Supply</th>
                      <th className='mob-display' scope="col">Market Cap</th>
                      {/* <th scope="col">Volume(24h)</th>
                      <th scope="col">Last 7 Days</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">1</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">2</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">3</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">4</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">5</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">6</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">7</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">8</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">9</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>
                    <tr>
                      <th scope="row"><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></th>
                      <th scope="row">10</th>
                      <td>
                        <div className="tokenName_Div">
                          <div className="tokenName_img"><img src={TokenImag} alt="token" /></div>
                          <div className="tokenName_text">
                            <span>SEAM</span>
                            {/* <span>SML</span> */}
                          </div>
                        </div>
                      </td>
                      <td>$65.28</td>
                      <td className='mob-display'>400M</td>
                      <td className='mob-display'>$3,976,029,423</td>
                      {/* <td>$555,758,010</td>
                      <td><img src={Graph} alt="svg graph" /></td> */}
                    </tr>                    
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Token