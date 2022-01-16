import React, { useState, useEffect } from "react";

import Card from "./Card";
import { DATA_URL } from "../utils/constants";
import "../css/FAQ.css";

import background from "../assets/faq-backgr.png";
import person from "../assets/faqs.png";

const FAQ = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!dataLoaded || !data) fetchData();
  }, []);

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

    console.log(newExpArr);

    setData(newExpArr);
  }

  return (
    <div className="faq">
      <img src={background} className="faq-backgr" />
      <div className="faq-header">
        <div>
          <p className="section-title">FAQ</p>
          <p className="faq-description">
            Questions and Answers on Professional Traffic Permits:
          </p>
        </div>
        <img src={person} />
      </div>
      <div className="questions">
      {
        dataLoaded && !!data && data.map((elem, index) => (
          <Card
            key={index}
            title={elem.title}
            message={elem.message}
            expanded={elem.expanded}
            handleOnToggle={() => handleOnToggle(index)}
          />
        ))
      }
      </div>
    </div>
  );
};

export default FAQ;
