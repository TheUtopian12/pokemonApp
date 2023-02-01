import { Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        WebkitJustifyContent: "start",
        padding: "0x 50px",
        backgroundColor: theme?.colors.gray200.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Imagen de pokemoon"
        width={100}
        height={100}
      />
      <Link href={"/"}>
        <>
          
          <Text color="white" h3>
          Pokemon
          </Text>
        </>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link href={"/favorites"} style={{marginRight:'50px'}}>
        <>
          
        <Text color="white">Favoritos</Text>
        </>
      </Link>
      
    </div>
  );
};
