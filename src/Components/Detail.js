import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Detail = () => {
      const { id } = useParams();
 const navigate = useNavigate();
 const [data, setData] = useState("");

 const [query, setquery] = useState("nature");


 const api = "";

 useEffect(() => {
   const getdata = async () => {
     await axios(`https://api.pexels.com/v1/photos/${id}`, {
       method: "get",
       headers: {
         Authorization: api,

         "Content-Type": "application/json",
       },
     }).then((resp) => {
       setData(resp.data);
       console.log(resp.data);
     });
   };
   getdata();
 }, [query]);





  return (
    <div>
      {data && (
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="bg-light p-4 mt-2 mb-4">
                <h2 className="card-title text-center fw-bold  ">{data.alt}</h2>
                <h6 className="card-subtitle text-center text-capitalize">
                  - {data.photographer}
                </h6>
              </div>

              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                  <div className="white-box text-center">
                    <img
                      src={data.src.original}
                      className="img-responsive h-100 w-100 "
                    />
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6 bg-light">
                  <h3 className="box-title mt-5"> Description</h3>
                  <h5 className='bg-warning p-2'>{data.alt}</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>

                  <div className="d-flex gap-4">
                    <div className="btn btn-outline-warning ">
                      <Link to={data.photographer_url}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="26"
                          fill="currentColor"
                          class="bi bi-link"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                          <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                        </svg>
                      </Link>
                    </div>
                    <div className="btn  btn-outline-success">
                      <Link to={data.url}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="26"
                          fill="currentColor"
                          class="bi bi-share"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail
