import React, { HtmlHTMLAttributes } from "react";
import Image from "next/image";

type TransactionItem = {
  image: string;
  title: string;
  date: string;
  amount: string;
};

interface TransactionsProps {
  data: TransactionItem[];
}

const Transactions: React.FC<TransactionsProps> = ({ data }) => {
  return (
    <div className="border-gray-300 w-full md:min-w-[700px] md:max-w-[700px] p-4 md:p-10 sm:ml-16 sm:mb-10 rounded-lg bg-white h-[250px] md:h-[300px]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-xl p-3">Transactions</h1>
        <div className="flex gap-3 items-center"></div>
        <h1 className="font-bold text-lg text-[#2A63E2] p-3">See All</h1>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#F8F8F8] h-full">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.9582 9.62533C37.0623 8.97949 36.0415 8.50033 34.9373 8.22949C34.1873 8.02116 33.4165 7.91699 32.6248 7.91699H24.8748C23.6665 7.91699 23.5832 7.81283 22.9373 6.95866L20.0207 3.08366C18.6665 1.27116 17.604 0.166992 14.2082 0.166992H9.37484C4.2915 0.166992 0.166504 4.29199 0.166504 9.37533V32.6253C0.166504 37.7087 4.2915 41.8337 9.37484 41.8337H32.6248C37.7082 41.8337 41.8332 37.7087 41.8332 32.6253V17.1253C41.8332 14.0212 40.3123 11.292 37.9582 9.62533ZM25.979 30.042H15.9998C15.1873 30.042 14.5623 29.3962 14.5623 28.5837C14.5623 27.792 15.1873 27.1253 15.9998 27.1253H25.979C26.7915 27.1253 27.4373 27.792 27.4373 28.5837C27.4373 29.3962 26.7915 30.042 25.979 30.042Z"
            fill="#E4E4E4"
          />
        </svg>
        No recent transactions
      </div>
      {/* <div className="grid grid-cols-5 gap-4"> */}
      {/* {data.map((item, index) => (
        <div key={index} className="">
          <div className="p-3 flex gap-3 items-center">
            <div className=" p-2 flex items-center gap-2 mr-5 min-w-[250px]">
              <div className="p-3 bg-[#E7F8E0] rounded-full">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0502 21.9493L21.9497 12.0498"
                    stroke="#049601"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0503 12.0503H21.9497V21.9498"
                    stroke="#049601"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h1>{item.image}</h1>
            </div>
            <div className=" p-2 min-w-[100px] font-bold">
              <span className="line-through">N</span> {item.amount}
            </div>
            <div className=" p-2 min-w-[150px]">{item.date}</div>
            <div className=" p-2 max-w-[100px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer font-bold"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                  fill="#5E5F60"
                />
                <path
                  d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                  fill="#5E5F60"
                />
                <path
                  d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                  fill="#5E5F60"
                />
              </svg>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Transactions;
