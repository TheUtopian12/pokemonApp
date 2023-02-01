import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import { pokeApi } from "api";
import { Layout } from "components/layouts";
import { Pokemon } from "interfaces";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import React from "react";
interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default || "No image"
                }
                alt={pokemon.name}
                width="100%"
                height="200px"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
            
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction="row" display="flex">
                <Image
                  src={
                    pokemon.sprites.animated?.front_default ||
                    pokemon.sprites.front_default
                  }
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={
                    pokemon.sprites.animated?.back_default ||
                    pokemon.sprites.back_default
                  }
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={
                    pokemon.sprites.animated?.front_shiny ||
                    pokemon.sprites.front_shiny
                  }
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={
                    pokemon.sprites.animated?.back_shiny ||
                    pokemon.sprites.back_shiny
                  }
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
