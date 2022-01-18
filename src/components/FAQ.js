import React, { useState, useEffect } from "react";

import Card from "./Card";
import { DATA_URL } from "../utils/constants";
import "../css/FAQ.css";

import background from "../assets/faq-backgr.png";
import person from "../assets/faqs.png";

const MIN_CARDS = 10;

const FAQ = () => {
  const [indexData, setIndexData] = useState(0);
  const [canLoadMore, setCanLoadMore] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!dataLoaded || !data) fetchData();
  }, []);

  useEffect(() => {
    if (dataLoaded && !!data && indexData === 0) {
      let numOfItems = data.length;
      let value = MIN_CARDS < numOfItems ? MIN_CARDS : numOfItems;

      setCanLoadMore(MIN_CARDS < numOfItems);
      setIndexData(value);
    }
  }, [data, dataLoaded]);

  const fetchData = async () => {
    const response = await fetch(DATA_URL);
    const jsonData = await response.json();
    let data = jsonData.response.map((elem) => ({
      title: elem.title,
      message: elem.Message,
      expanded: false
    }));

    setData(data);
    setDataLoaded(true);
  }

  const handleOnToggle = (index) => {
    let newExpArr = [...data];
    newExpArr[index].expanded = !newExpArr[index].expanded;

    setData(newExpArr);
  }

  const handleShowMore = () => {
    let itemsLeft = data.length - indexData;
    if (itemsLeft > 0) {
      setCanLoadMore(true);
      if (itemsLeft > MIN_CARDS) setIndexData(indexData + MIN_CARDS);
      else {
        setIndexData(indexData + itemsLeft);
        if (indexData + itemsLeft === data.length) setCanLoadMore(false);
      }
    } else setCanLoadMore(false);
  };

  return (
    <div className="faq">
      <img src={background} className="faq-backgr" alt="background" />
      <div className="faq-header">
        <div>
          <p className="section-title">FAQ</p>
          <p className="faq-description">
            Questions and Answers on Professional Traffic Permits:
          </p>
        </div>
        <img src={person} alt="person" />
      </div>
      <div className="questions">
      {
        dataLoaded && !!data && data.map((elem, index) => {
          return index < indexData ? (
            <Card
            key={index}
            title={elem.title}
            message={elem.message}
            expanded={elem.expanded}
            handleOnToggle={() => handleOnToggle(index)}
            isButton={false}
          />
          ) : null;
        })
      }
      {
        canLoadMore && !!data && (
          <div className="faq-card load-more-div">
            <Card
              title={'LOAD MORE'}
              isButton={true}
              handleOnClick={handleShowMore}
            />
          </div>
        )
      }
      </div>
    </div>
  );
};

export default FAQ;
