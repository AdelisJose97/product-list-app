import './App.css';
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import CountColums from './components/CountColums';
import { StyledProductsContainer } from './components/ProductsContainer/StyledProductsContainer';
import { StyledPaginationContainer } from './components/Pagination/StyledPaginationContainer';
import useFetch from './hooks/useFecth';
import { Pagination, Paper } from '@mui/material';
import Modal from '@mui/material/Modal';
import Carousel from 'react-material-ui-carousel';

function App() {
  const { data, setPaginationOptions } = useFetch(
    'https://dummyjson.com/products'
  );

  const [cardsByRow, setCardsByRow] = useState(4);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleChange = (event, value) => {
    setPaginationOptions((prevValues) => ({
      ...prevValues,
      skip: (value - 1) * 10,
    }));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Product List App</h1>
        <CountColums cardsByRow={cardsByRow} setCardsByRow={setCardsByRow} />
      </header>

      <StyledProductsContainer cardByColumns={cardsByRow}>
        {data.length &&
          data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                handleOpen={handleOpen}
                setSelectedProduct={setSelectedProduct}
              />
            );
          })}
      </StyledProductsContainer>

      <StyledPaginationContainer>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </StyledPaginationContainer>
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '50%',
          }}
        >
          <Carousel className="carousel-container">
            {selectedProduct?.images?.map((image, index) => {
              return (
                <div key={index} className="product-carousel-item">
                  <img
                    className="product-carousel-item-img"
                    src={image}
                    alt="product-img"
                  />
                </div>
              );
            })}
          </Carousel>
        </Paper>
      </Modal>
    </div>
  );
}

export default App;
