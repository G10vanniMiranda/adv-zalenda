'use client'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react";

export default function Home() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".home-item", {
      x: -10,
      opacity: 1,
      duration: 3
    })
    return () => {
      gsap.killTweensOf(".home-item")
    }
  }, [])
  return (
    <div className="flex flex-col">

      <section className="flex">
        <img src="./image/home.png" className="flex-1 relative" alt="" />
        <div className="home-item">
          <h2 className="text-white md:text-6xl text-3xl font-bold md:mb-28">JUROS ABUSIVOS </h2>

          <p className="md:text-xl text-sm text-center  bg-yellow-600 p-2 rounded-xl font-semibold px-5">  Saiba se você está pagando juros abusivos ou taxas indevidas. </p>
        </div>
      </section>

      <section className="flex flex-col items-center session-2 p-20"
        style={{
          backgroundImage: `url("./image/page2.png")`,
          width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>

        <h2 className="text-6xl mt-16 mb-16">Empréstimo com juros e taxas indevidas?</h2>

        <p className="text-2xl text-center">
          Os bancos frequentemente aplicam taxas e juros abusivos em contratos de empréstimos e financiamentos, e ainda incluem produtos indesejados sem o conhecimento do cliente.
          Revisar esses contratos pode recuperar valores pagos indevidamente e reduzir custos.
        </p>

        <p className="text-2xl mt-10 text-center">
          Acrescentar produtos ou serviços não solicitados nos contratos de empréstimos, configura prática abusiva conhecida como venda casada , proibida pelo Código de Defesa do Consumidor. Exemplos comuns incluem: Seguro Prestamista, Pacotes de Serviços Bancários, Títulos de Capitalização.
        </p>

      </section>

      <section className="flex flex-col">
        <header className="flex flex-col bg-yellow-600 w-screen h-[30vh]">
          <h2 className="text-5xl font-bold ml-10 text-black mt-28">O que fazer?</h2>
        </header>

        <article className="flex flex-col items-center md:flex-row gap-2 bg-zinc-900 w-screen h-[80vh] p-10 md:0">
          <article className="flex-1 md:p-8 flex items-center md:flex-col">
            <img className="self-center item-p-1 md:mr-5" src="image/icon-balanca.png" width={100} alt="" />
            <h2 className="text-white mb-5">1º Passo</h2>
            <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
              do seu contrato.</p>

          </article>
          <article className="flex-1 md:p-8 items-center flex md:flex-col bg-zinc-900">
            <img className="self-center item-p-2" src="image/icone-money.png" width={100} alt="" />
            <h2 className="text-white mb-5">2º Passo</h2>
            <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
              do seu contrato.</p>
          </article>
          <article className="flex-1 md:p-8 items-center flex md:flex-col bg-zinc-900">
            <img className="self-center item-p-3" src="image/icon-arrow.png" width={100} alt="" />
            <h2 className="text-white mb-5">3º Passo</h2>
            <p className="text-white">Agenda uma consulta com nossos advogados especialistas e faça uma análise gratuita
              do seu contrato.</p>
          </article>
        </article>
      </section>

      <section className="flex items-center">

        <div className="flex items-center justify-start"
          style={{
            backgroundImage: `url("./image/contato-left.png")`,
            width: '50%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>

          <h2 className="text-black text-8xl font-bold mt-96 ml-40">Contato</h2>

        </div>


        <div className="flex p-20"
          style={{
            backgroundImage: `url("./image/contato-right.png")`,
            width: '50%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>

          <div className="p-10">
            <div className="row mb-4 pt-12">
              <h3 className="font-bold text-black text-4xl">E-mail</h3>
              <p className="text-black text-xl">zalendaadvogados@gmail.com</p>
            </div>

            <div className="row mb-4">
              <h3 className="font-bold text-black text-4xl">Redes sociais</h3>
              <p className="text-black text-xl">@zalenda.advogados</p>
            </div>

            <div className="row">
              <h3 className="font-bold text-black text-4xl">Telefone</h3>
              <p className="text-black text-xl">(69)99268-2118</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
