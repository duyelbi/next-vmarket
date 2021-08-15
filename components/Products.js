import React from 'react';
import NextLink from 'next/link';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import data from "../utils/data";

const Products = () => {
    return (
      <div>
          <h1>Products</h1>
          <Grid container spacing={3}>
            {data.products.map((products) => (
              <Grid item md={3} key={products.name}>
                <Card>
                  <NextLink href={`/products/${products.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={products.image}
                      title={products.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{products.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>${products.price}</Typography>
                    <Button size="small" color="primary">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </div>
    );
}

export default Products;