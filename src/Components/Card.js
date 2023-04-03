import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { createClient } from "pexels";
import { Link, useNavigate } from "react-router-dom";

const Card_ = () => {
   const navigate = useNavigate();
     const [data, setData] = useState("");

     const listItem = [
       { id: 1, item: "Beautiful" },
       { id: 2, item: "Dark" },
       { id: 3, item: "Beach" },
       { id: 4, item: "Nature" },
       { id: 5, item: "Car" },
       { id: 6, item: "Space" },
       { id: 7, item: "Business" },
       { id: 8, item: "Abstract" },
       { id: 9, item: "Sky" },
       { id: 10, item: "Technology" },
       { id: 11, item: "Landscape" },
       { id: 12, item: "Food" },
       { id: 13, item: "Flowers" },
       { id: 14, item: "Spring" },
       { id: 15, item: "Easter" },
     ];

  const [query, setquery] = useState("nature");
  const [recipes, setdata] = useState([]);


 const api = "onrqKGX0K2o7DUdMhQ9gQFiyNrnaOCmuZlvooEZqchpDfcde2DlCLKcR"; 
 
 useEffect(() => {
  const getdata = async()=>{
    const imgs = await axios(
      `https://api.pexels.com/v1/search?query=${query}`,
      {
        method: "get",
        headers: {
          Authorization: api,

          "Content-Type": "application/json",
        },
      }
    ).then((resp) => {
      setdata(resp.data.photos);
      console.log(resp.data.photos);
    });
  }
  getdata();
    
 }, [query]);




    const LoadDetails = (id) => {
        navigate("/detail/" + id);
      };
  



  

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-3  overflow-scroll bg-light pt-3 container">
        {listItem &&
          listItem.map((id, e) => {
            return (
              <div key={e} onClick={()=>setquery(id.item)
              } className="cursor-pointer">
                <ul>
                  <a className="btn btn-dark text-capitalize">{id.item}</a>
                </ul>
              </div>
            );
          })}
      </div>

      <Container className="mt-4">
        <div className="container">
          <div className="card-columns">
            {recipes &&
              recipes.map((data, id) => {
                return (
                  <div className="card " key={id} onClick={()=>LoadDetails(data.id)}>
                    <img
                      className="card-img-top"
                      src={data.src.original}
                      alt={data.alt}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Card_;
