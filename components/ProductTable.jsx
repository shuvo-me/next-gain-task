import Image from "next/image";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageViewer from "react-simple-image-viewer";
import { api } from "../assets/data";
import Spinner from "./Spinner";
const ProductTable = () => {
  // const [n, setN] = useState(20);
  const [products, setProducts] = useState(api.slice(0, 20));
  const [viewImage, setViewImage] = useState(false);
  const [currentSources, setCurrentSources] = useState([]);

  const getProductImage = (linkArr) => {
    return linkArr[0];
  };

  const isBestValue = (product) => {
    if (
      product.phone_price <= 20 &&
      product.ram >= 4 &&
      product.storage >= 64 &&
      product.brand == ("Xiaomi" || Realme)
    )
      return true;
    else return false;
  };
  const isBestPerformance = (product) => {
    if (
      product.phone_details.chipset.includes("Snapdragon") &&
      product.phone_price > 20 &&
      product.ram > 4 &&
      product.storage > 128 &&
      product.speciality.includes("Amoled display")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isBestCamera = (product) => {
    if (product && product.phone_details) {
      const getMainCameraInfo = (details) => {
        // console.log({ details });
        const sensor = details && Number(details?.split(" ")[0]);
        let cameras = 0;
        details &&
          details.split(" ").map((item) => item.includes("f/") && cameras++);

        if (sensor >= 16 && cameras >= 3) return true;
        else return false;
      };

      const getSelfiCameraInfo = (info) => {
        const mp = info && Number(info?.split(" ")[0]);

        return mp >= 13 ? true : false;
      };

      if (
        getMainCameraInfo(product.phone_details.mainCamera) == true &&
        getSelfiCameraInfo(product.phone_details.selfieCamera) == true &&
        product.storage >= 64
      ) {
        return true;
      } else {
        false;
      }
    } else {
      return false;
    }
  };

  // useEffect(() => {}, [n]);
  const fetchMore5 = async () => {
    console.log(" hi");

    setTimeout(() => {
      setProducts(api.slice(0, products.length + 5));
    }, 1500);
  };

  const openImageGellary = (product) => {
    setViewImage(true);
    setCurrentSources((prevImages) => [...product.phone_images]);
  };

  const closeImageViewer = (e) => {
    console.log({ e });
    setCurrentSources([]);
    setViewImage(false);
  };

  return (
    <>
      <div className="product-table container mx-auto mt-10 pb-64">
        <div className="product-table-header flex items-center justify-between">
          <h4 className=" text-[#575757] text-[20px] font-medium">
            ALL Products
          </h4>
          <div className="product-table-filter">
            <span className="text-[#74777B] text-[14px] mr-2">Sort by:</span>
            <select
              name=""
              id=""
              className=" px-2 py-2 min-w-[180px] bg-transparent border border-slate-300 text-[#74777B]"
            >
              <option selected disabled>
                {" "}
                --- Select ---
              </option>
              <option value="1">Best value</option>
              <option value="2">Best camera</option>
              <option value="3">Best performance</option>
            </select>
          </div>
        </div>

        <div className="product-table-table mt-10">
          <InfiniteScroll
            dataLength={products.length}
            next={() => fetchMore5()}
            hasMore={true}
            loader={<Spinner />}
            // scrollableTarget="table-wrapper"
          >
            <div className="overflow-x-auto relative" id="table-wrapper">
              <table className="w-full text-sm text-left">
                <thead className="text-xs  uppercase">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-[#74777B] text-[14px] font-normal"
                    >
                      Model
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-[#74777B] text-[14px] font-normal"
                    >
                      Ram/Rom
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-[#74777B] text-[14px] font-normal"
                    >
                      Tag
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-[#74777B] text-[14px] font-normal"
                    >
                      Price
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product, idx) => (
                    <tr className="bg-white border-b " key={Math.random()}>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium  whitespace-nowrap dark:text-white cursor-pointer"
                        title="Click to open gellary"
                        onClick={() => openImageGellary(product)}
                      >
                        <div className=" flex items-center">
                          <div className=" h-[80px] w-[75px] mr-5">
                            <Image
                              src={getProductImage(product.phone_images)}
                              height={80}
                              width={80}
                              className="hidden"
                            />
                          </div>

                          <div className="info">
                            <h5 className="text-[#575757] text-[14px] font-[600]">
                              {product.phone_title}{" "}
                            </h5>
                            <p className="text-[#74777B] text-sm">
                              {product.brand}
                            </p>
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-6">{`${product.ram}/${product.storage}`}</td>
                      <td className="py-4 px-6">
                        {isBestValue(product) && (
                          <span className=" bage-yellow ">Best Value</span>
                        )}
                        {isBestPerformance(product) && (
                          <span className=" bage-info ">Best Performance</span>
                        )}
                        {isBestCamera(product) && (
                          <span className=" bage-purple ">Best Camera</span>
                        )}
                      </td>
                      <td className="py-4 px-6">$2999</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InfiniteScroll>
          {viewImage && (
            <ImageViewer
              src={currentSources}
              currentIndex={1}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              closeOnClickOutside={true}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductTable;
