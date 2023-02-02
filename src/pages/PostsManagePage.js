import React, { useEffect, useState } from "react";
import useDebounce from "../hook/useDebounce";
import ReactPaginate from "react-paginate";

const PostsManagePage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [dataView, setDataView] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  const filterDebounce = useDebounce(filter, 1000);

  const getData = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setData(data);
        }
      });
  };

  const handleViewDetail = async (id) => {
    setIsOpen(!isOpen);
    const url = `https://jsonplaceholder.typicode.com/posts?id=${id}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDataView(data);
        }
      });
  };

  const handleSearchPost = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filterDebounce !== "") {
      const url = `https://jsonplaceholder.typicode.com/posts?userId=${filterDebounce}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setData(data);
          }
        });
    } else {
      getData();
    }
  }, [filterDebounce]);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="posts-manage  relative">
      <div className="posts-manage__header flex gap-10 items-center mb-4">
        <h3 className="posts-manage__title">Users Management</h3>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search follow userId.."
          className="border-2 rounded-lg p-2"
          onChange={handleSearchPost}
        />
      </div>
      <table id="table-post">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 &&
            currentItems.map((post) => {
              return (
                <tr key={post.id} className="text-center">
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td className="text-left">{post.title}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleViewDetail(post.id);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination"
      />
      {isOpen && (
        <ViewDetailPost
          data={dataView}
          onClose={() => {
            setIsOpen(false);
            setDataView([]);
          }}
        />
      )}
    </div>
  );
};

function ViewDetailPost(props) {
  const { data, onClose } = props;
  const dataView = data.length > 0 && data[0];

  if (!dataView) return null;

  return (
    <div className="model-view max-w-[500px]  absolute  top-28 ">
      <div
        className="model-overlay top-0 left-0 right-0 bottom-0 fixed"
        style={{ backgroundColor: "rgba(0,0,0,.7)" }}
      ></div>
      <div className="model-view__content max-w-[500px] bg-gray-400 p-3 fixed z-20">
        <p>User ID: {dataView.userId} </p>
        <h4>{dataView.title} </h4>
        <p>{dataView.body}</p>
      </div>
      <button
        onClick={onClose}
        className="absolute right-5 top-3 bg-slate-100 p-2 rounded-lg"
      >
        X
      </button>
    </div>
  );
}

export default PostsManagePage;
