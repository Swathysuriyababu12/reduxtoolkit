import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useProduct from "./useProduct";
import axios from "axios";
import { getmainProducts } from "./slices";
import { getAllProducts } from "./slices";
import { useDispatch, useSelector } from "react-redux";
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // On Mount
    console.log("Product Component Enter");
    dispatch(getmainProducts());
    //

    return () => {
      // On Destroy
      console.log("Product Component Destroy");
    };
  }, []);

  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  useEffect(() => {
    console.log("Count 2 Updated");
  }, [count2]);

  searchParams.forEach((value, key) => {
    console.log(key);
    console.log(value);
  });

  // const {products, getData } = useProduct();
  const { products } = useSelector((state) => state.app);
  console.log(products);

  let search = () => {
    setSearchParams("city=newyork&country=america");
  };

  let productDelete = async (id) => {
    try {
      let permission = window.confirm("Are you sure? Do you want to delete?");
      if (permission) {
        await axios.delete(
          `https://6461c1c2491f9402f4aa0565.mockapi.io/products/${id}`
        );
        dispatch(getmainProducts);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to={"/create-product"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Product
        </Link>
      </div>

      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <input type="text" className="form-control" />
        <button onClick={search} className="btn btn-warning">
          Search
        </button>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>In Stock</th>
                  <th>Image Link</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>In Stock</th>
                  <th>Image Link</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.inStock ? "True" : "False"}</td>
                      <td>
                        <img src={product.imageLink} width={150} height={100} />
                      </td>
                      <td>{product.description}</td>
                      <td>
                        <Link
                          to={`/product/view/${product.id}`}
                          className="btn btn-info btn-sm mr-2"
                        >
                          View
                        </Link>
                        <Link
                          to={`/product/edit/${product.id}`}
                          className="btn btn-primary btn-sm mr-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => productDelete(product.id)}
                          className="btn btn-danger btn-sm mr-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

/*

  Hooks should only be called at the top level of functional components or other hooks, not inside loops, conditions, or nested functions.
  Hooks should be called in the same order on every render, ensuring that the state and hooks are properly synced.
  Custom hooks should be prefixed with "use" to indicate that they follow the rules of hooks.

  // useState()
  // useParams()
  // useFormik()
  // useSearchParams()
  */
