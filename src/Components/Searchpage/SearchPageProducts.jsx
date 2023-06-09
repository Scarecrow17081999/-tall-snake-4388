import React from "react";
import {
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  Card,
  Grid,
  GridItem,
  ChakraProvider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function SearchPageProducts() {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, []);
  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((e) => {
          return (
            <GridItem>
              <ProductCard data={e} key={e.id} />;
            </GridItem>
          );
        })}
      </Grid>
    </ChakraProvider>
  );
}

function ProductCard(data) {
  return (
    <>
      <Card maxW="200px">
        <CardBody>
          <Image
            src={data ? data.data.images[0] : ""}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack style={{ textAlign: "start" }} mt="6" spacing="3">
            <Link to={`/singleproductpage/${data.data.id}`}>
              <Heading size="md">{data ? data.data.title : ""}</Heading>
              <Text>{data ? data.data.description : ""}</Text>
              <Text color="blue.600" fontSize="2xl">
                {data ? `₹${data.data.price}` : ""}
              </Text>
            </Link>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
