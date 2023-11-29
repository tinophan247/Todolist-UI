import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";

function Table() {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    axios.get("https://students.trungthanhweb.com/api/getCates").then((res) => {
      setCate(res.data);
    });
  }, []);

  console.log(cate);

  return (
    <div className="flex justify-center items-center">
      <div class="relative overflow-x-auto w-[1200px]">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Id
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Created at
              </th>
              <th scope="col" class="px-6 py-3">
                Updated at
              </th>
            </tr>
          </thead>
          <tbody>
            {cate.length > 0 &&
              cate.map((item, index) => (
                <tr key={index}>
                  <th scope="col" class="px-6 py-3">
                    {item.id}
                  </th>
                  <th scope="col" class="px-6 py-3">
                    {item.name}
                  </th>
                  <th scope="col" class="px-6 py-3">
                    {item.status}
                  </th>
                  <th scope="col" class="px-6 py-3">
                    {moment(item.created_at).format('DD/MM/YYYY') }
                  </th>
                  <th scope="col" class="px-6 py-3">
                    {moment( item.updated_at).format('DD/MM/YYYY')}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
