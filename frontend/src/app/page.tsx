"use client"
import Project from "@/components/classes/project";
import Footer from "@/components/footer";
import Projects from "@/components/projects/projects";
import NavBar from "@/components/navbar";
import Header from "@/components/header";
import AboutMe from "@/components/aboutMe";
import Tecnologias from "@/components/tecnologias/tecnologias";

export default function Home() {
  const projects:Project[]= [
    new Project(
      0,
      "Banker",
      ["/hola.png"],
      "Una aplicación de código abierto para montar un Banco Online, permite gestionar cuentas, sus transferencias y se enlaza con Cuentas de Blockchain usando BlockChain Buildings",
      "",
      ["Nest.JS","Next.JS", "Socket.io", "MariaDB","Redis","RabbitMQ","Nginx"]
    ),
    new Project(
      1,
      "BlockChain Buildings",
      ["/hola.png"],
      "Una aplicación que monta una BlockChain de Ethereum y un Smart Contract que crea una ERC20 \"BD\" cuya minería es a través de edificios que se compran y se Alquilan o venden. La interfaz gráfica permite manejarse en la cuenta de Ethereum con este token ERC20 creado y los edificios.",
      "",
      ["HardHat","Solidity","Next.JS"]
    )
  ]

  const lenguajes = {

  }

  const frameworks = {

  }

  const curriculum = {

  }
  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe />
      <Projects projects={projects} />
      <Tecnologias />
      <Footer />
    </div>
  );
}
