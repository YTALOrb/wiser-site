"use client";

import React, { useState } from "react";
import Card from "@/components/home/card";
import { DOWNLOAD_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "pt" : "en"));
  };

  const translations: {
    [key: string]: {
      title: string;
      description: string;
      buttonText: string;
      devText: string;
      toggleButtonText: string;
      features: ({ title: string; description: string; large: boolean } | { title: string; description: string; large?: undefined })[];
    };
  } = {
    en: {
      title: "Wiser: Next Generation Roleplay",
      description: "Stay connected with your community, manage your servers, and find new mods, all in one place.",
      buttonText: " ➕ Download Wiser",
      devText: "Dev",
      toggleButtonText: "Toggle Language",
      features: [
        {
          title: "Stay connected with your community",
          description: "Join public chats, DM your friends, and create private groups to stay connected with your community.",
          large: false,
        },
        {
          title: "Manage your servers",
          description: "Easily manage your servers, including starting, stopping, and restarting servers, as well as managing permissions.",
        },
        {
          title: "Discover new mods",
          description: "Browse a curated list of mods, including scripts, maps, and vehicles, and easily add them to your server with one click.",
        },
        {
          title: "Customize your experience",
          description: "Choose from a variety of themes and customization options to make Wiser your own.",
        },
        {
          title: "Always up-to-date",
          description: "Wiser is constantly being updated with new features and improvements to make your Roleplay experience better.",
        },
        {
          title: "Next Generation RP Mobile",
          description: "Stay connected with your community, manage your servers, and find new mods, all from your mobile device.",
          large: false,
        },
      ],
    },
    pt: {
      title: "Wiser: Roleplay da Próxima Geração",
      description: "Fique conectado com sua comunidade, gerencie seus servidores e encontre novos mods, tudo em um só lugar.",
      buttonText: " ➕ Baixar Wiser",
      devText: "Dev",
      toggleButtonText: "Alternar Idioma",
      features: [
        {
          title: "Fique conectado com sua comunidade",
          description: "Junte-se a chats públicos, envie mensagens diretas para seus amigos e crie grupos privados para se manter conectado com sua comunidade.",
          large: false,
        },
        {
          title: "Gerencie seus servidores",
          description: "Gerencie facilmente seus servidores, incluindo iniciar, parar e reiniciar servidores, além de gerenciar permissões.",
        },
        {
          title: "Descubra novos mods",
          description: "Navegue por uma lista curada de mods, incluindo scripts, mapas e veículos, e adicione-os facilmente ao seu servidor com um clique.",
        },
        {
          title: "Customize sua experiência",
          description: "Escolha entre uma variedade de temas e opções de personalização para tornar o Wiser único para você.",
        },
        {
          title: "Sempre atualizado",
          description: "O Wiser está sendo constantemente atualizado com novos recursos e melhorias para tornar sua experiência de Roleplay melhor.",
        },
        {
          title: "RP Móvel da Próxima Geração",
          description: "Fique conectado com sua comunidade, gerencie seus servidores e encontre novos mods, tudo do seu dispositivo móvel.",
          large: false,
        },
      ],
    },
  };

  return (
    <>
      <h1
        className="mt-6 animate-fade-up text-gradient from-black to-stone-500 opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[10rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        {translations[language].title}
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        {translations[language].description}
      </p>
      <div
        className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <a
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{translations[language].buttonText}</p>
        </a>
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          href="https://github.com/topgamisks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>{translations[language].devText}</p>
        </a>
      </div>
      <button
        className="fixed bottom-4 right-4 p-2 bg-white rounded-full shadow-md"
        onClick={toggleLanguage}
      >
        🌎
      </button>

      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {translations[language].features.map(({ title, description, large }) => (
          <Card key={title} title={title} description={description} large={large} />
        ))}
      </div>
    </>
  );
}
