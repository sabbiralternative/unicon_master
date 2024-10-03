import { useEffect, useState } from "react";
import handleRandomToken from "../../../utils/handleRandomToken";
import handleEncryptData from "../../../utils/handleEncryptData";
import { API } from "../../../api";
import { useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const token = useSelector(userToken);
  const [data, setData] = useState([
    {
      name: "Brighton v Everton",
      eventId: 33011440,
      eventTypeId: 1,
      eventType: "Football",
      openDate: "2024-02-24 20:30:00",
    },
    {
      name: "Leverkusen v Mainz",
      eventId: 33014035,
      eventTypeId: 1,
      eventType: "Football",
      openDate: "2024-02-24 01:00:00",
    },
    {
      name: "K Stevenson v Pa Brady",
      eventId: 806743465,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-11-13 02:30:00",
    },
    {
      name: "Juan Estevez - Alan Fernando Rubio Fierros",
      eventId: 687141750,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-11-01 23:20:00",
    },
    {
      name: "Djokovic v To Etcheverry",
      eventId: 872386048,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-11-01 18:30:00",
    },
    {
      name: "Evan King/Brandon Nakashima - Cornea V V / Stevens B",
      eventId: 802104308,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-11-01 17:30:00",
    },
    {
      name: "Duncan/stevenson - Anirudh Chandrasekar/ Prashanth Vijay Sundar",
      eventId: 768752629,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-11-01 14:30:00",
    },
    {
      name: "Kecmanovic v To Etcheverry",
      eventId: 484398358,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-10-31 15:30:00",
    },
    {
      name: "David Stevenson - James Mackinlay",
      eventId: 878092877,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-10-29 15:30:00",
    },
    {
      name: "Murray v To Etcheverry",
      eventId: 897310501,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-10-25 23:30:00",
    },
    {
      name: "Griekspoor/Stevens v Bhambri/Cash",
      eventId: 663705545,
      eventTypeId: 2,
      eventType: "Tennis",
      openDate: "2023-10-21 22:40:00",
    },
  ]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (searchText.length > 2) {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData(generatedToken);
      const getSearchData = async () => {
        const res = await fetch(API.searchEvent, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: searchText,
            token: encryptedData,
          }),
        });
        const data = await res.json();
        console.log(data);
        if (data?.result?.length > 0) {
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* filter the search value */
  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.eventType)));

    setCategories(categories);
  }, [data]);

  /* hide the search modal */
  const handleHideDropdown = () => {
    setSearchText("");
    setData([]);
  };

  return (
    <div className="relative search-box">
      <div
        id="searchBox"
        className="text-text_Quaternary relative hidden max-w-96 font-lato md:block flex-grow"
      >
        <div className=" relative w-full max-w-[450px]">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border-1 peer w-full  appearance-none text-xs pl-9 py-2 border  rounded-full md:text-[14px]  bg-bg_Quaternary  text-text_Ternary "
            placeholder="Search Events(At least 3 letters)..."
            type="text"
          />
          <svg
            fill="#999"
            className="absolute top-1/2 left-3 -translate-y-1/2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
          </svg>
        </div>
      </div>

      {data?.length > 0 && searchText && (
        <div className="search-list">
          {categories.map((category) => (
            <>
              <div className="search-game-name">
                <b>{category}</b>
              </div>
              {data
                .filter((item) => item.eventType === category)
                .map((item, i) => (
                  <Link
                    className="group"
                    onClick={handleHideDropdown}
                    key={i}
                    to={`/game-details/${item?.eventTypeId}/${item?.eventId}`}
                  >
                    <div className="search-list-item">
                      <div className="search-tournament-name">
                        <b className="group-hover:underline">{item?.name}</b>
                      </div>
                      <div className="search-game-date group-hover:underline">
                        {item?.openDate}
                      </div>
                    </div>
                  </Link>
                ))}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
