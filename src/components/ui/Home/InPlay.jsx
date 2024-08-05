const InPlay = ({ data }) => {
  console.log(data);
  return (
    <>
         <div className="inplay-popular-header inplay-header-color">
        <div className="inplay-popular-header__logo">
          <i className="inplay-popular-header__logo-icon inplay-header-icon"></i>
          <span className="inplay-popular-header__logo-text">In Play</span>
        </div>
      </div>


      <div className="inplay-item-list md list-md hydrated">
        <div className="inplay-item-list__header md hydrated">
          <div className="inplay-item-list__header-content">
            <div className="inplay-item-list__header-logo">
              <i className="inplay-content__logo-icon inplay-content__logo-icon--cricket inplay-color-icon"></i>
              Cricket
            </div>
            <div className="inplay-item-list__header-title">
              <span>1</span>
              <span>X</span>
              <span>2</span>
            </div>
          </div>
        </div>

     {
      data && Object.values(data).length > 0 && Object.keys(data)
      .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
      .map((keys, index) => {
       return (
        <div key={index} className="inplay-item item md in-list hydrated">
        <img loading="lazy" />
        <div className="inplay-item__content">
          <div className="inplay-item__row">
            <div className="inplay-item__desktop">
              <div className="inplay-item__players">
                <span className="inplay-item__player">
                  <span>{data[keys]?.eventName}</span>
                </span>
                {/* <span className="inplay-item__player">
                  <span>Delhi Capitals SRL</span>
                </span> */}
              </div>
            </div>
            {/* {
              data[keys]?.status === "OPEN" && data[keys][0] ?(

              ):(

              )
            } */}
            <div className="inplay-item__back">
              <div className="inplay-item__back-inner">
                <div className="inplay-item__back-inner inplay-item__back-inner-left">
                  <span className="odd-button back-color     ">
                    <span className="odd-button__inner odd-button__inner--centered ">
                      <div className="odd-button__price">2.9</div>
                    </span>
                  </span>
                  <span className="odd-button lay-color     ">
                    <span className="odd-button__inner odd-button__inner--centered ">
                      <div className="odd-button__price">-</div>
                    </span>
                  </span>
                  <span className="odd-button back-color     ">
                    <span className="odd-button__inner odd-button__inner--centered ">
                      <div className="odd-button__price">-</div>
                    </span>
                  </span>
                  <span className="odd-button lay-color     ">
                    <span className="odd-button__inner odd-button__inner--centered ">
                      <div className="odd-button__price">-</div>
                    </span>
                  </span>
                  <span className="odd-button back-color     ">
                    <span className="odd-button__inner odd-button__inner--centered ">
                      <div className="odd-button__price">1.4</div>
                    </span>
                  </span>
                  <span className="odd-button lay-color     ">
                    <span className="odd-button__inner odd-button__inner--centered ">
                      <div className="odd-button__price">-</div>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       )
      })

    }
 
     
      </div>
      <div className="inplay-item-list md list-md hydrated">
        <div className="inplay-item-list__header md hydrated">
          <div className="inplay-item-list__header-content">
            <div className="inplay-item-list__header-logo">
              <i className="inplay-content__logo-icon inplay-content__logo-icon--tennis inplay-color-icon"></i>
              Tennis
            </div>
            <div className="inplay-item-list__header-title">
              <span>1</span>
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="inplay-item item md in-list hydrated">
          <img loading="lazy" />
          <div className="inplay-item__content">
            <div className="inplay-item__row">
              <div className="inplay-item__desktop">
                <div className="inplay-item__players">
                  <span className="inplay-item__player">
                    <span className="inplay-item__player-batting"></span>
                    <span>Andrew Paulson</span>
                  </span>
                  <span className="inplay-item__player">
                    <span>Elmer Moeller</span>
                  </span>
                  <ion-img
                    src="static/media/inplay-broadcast-icon.e5eb4298.svg"
                    className="inplay-item__broadcast-icon md hydrated"
                  ></ion-img>
                </div>
              </div>
              <div className="inplay-item__back">
                <div className="inplay-item__back-inner">
                  <div className="inplay-item__back-inner inplay-item__back-inner-left">
                    <span className="odd-button back-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">2.42</div>
                        <div className="odd-button__volume">9</div>
                      </span>
                    </span>
                    <span className="odd-button lay-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">2.44</div>
                        <div className="odd-button__volume">202</div>
                      </span>
                    </span>
                    <span className="odd-button back-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">-</div>
                      </span>
                    </span>
                    <span className="odd-button lay-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">-</div>
                      </span>
                    </span>
                    <span className="odd-button back-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">1.7</div>
                        <div className="odd-button__volume">269</div>
                      </span>
                    </span>
                    <span className="odd-button lay-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">1.71</div>
                        <div className="odd-button__volume">150</div>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inplay-item item md in-list hydrated">
          <img loading="lazy" />
          <div className="inplay-item__content">
            <div className="inplay-item__row">
              <div className="inplay-item__desktop">
                <div className="inplay-item__players">
                  <span className="inplay-item__player">
                    <span>Geoffrey Blancaneaux</span>
                  </span>
                  <span className="inplay-item__player">
                    <span className="inplay-item__player-batting"></span>
                    <span>Nicolas Moreno De Albor</span>
                  </span>
                  <ion-img
                    src="static/media/inplay-broadcast-icon.e5eb4298.svg"
                    className="inplay-item__broadcast-icon md hydrated"
                  ></ion-img>
                </div>
              </div>
              <div className="inplay-item__back">
                <div className="inplay-item__back-inner">
                  <div className="inplay-item__back-inner inplay-item__back-inner-left">
                    <span className="odd-button back-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">2.42</div>
                        <div className="odd-button__volume">9</div>
                      </span>
                    </span>
                    <span className="odd-button lay-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">2.44</div>
                        <div className="odd-button__volume">202</div>
                      </span>
                    </span>
                    <span className="odd-button back-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">-</div>
                      </span>
                    </span>
                    <span className="odd-button lay-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">-</div>
                      </span>
                    </span>
                    <span className="odd-button back-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">1.7</div>
                        <div className="odd-button__volume">269</div>
                      </span>
                    </span>
                    <span className="odd-button lay-color     ">
                      <span className="odd-button__inner odd-button__inner--centered ">
                        <div className="odd-button__price">1.71</div>
                        <div className="odd-button__volume">150</div>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InPlay;
