'use client'
import { Logo } from "@/components/logo";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react";
import { CiBag1, CiGlobe } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { ItemText } from "@/components/ItemText/intext";
import { ItemBox } from "@/components/ItemBox";
import { FaHandshakeAngle, FaRegUser } from "react-icons/fa6";

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
    <div className="flex flex-col w-screen relative overflow-x-hidden">

      {/** WHATS OK TELEFONE */}
      <a href="https://api.whatsapp.com/send?phone=5569992682118&text=Quero%20fazer%20um%20agendamento%20hoje!"
        target="_blank">
        <button className="z-50 fixed bottom-10 right-2 animate-pulse">
          <img src="./image/zap.png" className="w-28 lg:w-44" alt="" />
        </button>
      </a>

      {/* 1 sessão pronto */}
      <section data-aos="fade-up" className="flex relative 3xs:h-[70vh] w-full  ">

        <div className="absolute top-2 md:top-10 left-10 z-10">
          <Logo />
        </div>

        {/* modificar */}
        <img src="./image/home.png" className="flex-1 relative" alt="" />
        <div className="home-item">
          <h2 className=" 
          text-white lg:text-6xl text-xl md:mb-28 bg-zinc-900/45 p-2 
          rounded-md lg:mt-44 mt-16 -ml-5 lg:ml-10 font-bold">JUROS ABUSIVOS </h2>

          <p className="lg:text-3xl text-[8px] -ml-3 lg:ml-10 text-start md:text-center bg-yellow-600 
          p-2 -pl-2 lg:pl-5 rounded-xl font-semibold"> Descubra se você está pagando juros abusivos <span className=" md:block hidden">ou taxas indevidas.</span> </p>
        </div>
      </section>

      {/* 2 sessão pronto SESSÃO ESTÁ OCULTA */}
      <section data-aos="fade-down" className="flex flex-col items-center session-2 h-[120vh] lg:h-[90vh] p-20 relative text-white" style={{
        backgroundImage: `url("./image/page2.png")`,
        width: '100', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
      }}>

        <div className="absolute lg:top-10 top-5 left-10  z-10">
          <Logo />
        </div>

        <h2 className="text-xl lg:text-7xl lg:mt-16 mt-8 mb-8 lg:mb-16 w-[350px] -ml-3 lg:w-[800px] md:text-start lg:text-center">Empréstimo com juros e taxas abusivas? Descubra agora.</h2>

        <p className="text-md px-2 lg:mt-20 lg:text-2xl text-justify md:text-center lg:w-[1280px] w-[320px] ">
          Os bancos frequentemente aplicam taxas e juros abusivos em contratos de empréstimos e financiamentos, além de incluir produtos indesejados
          sem o consentimento do cliente. Revisar esses contratos pode resultar na recuperação de valores pagos indevidamente e na redução de custos.
        </p>
        <p className="text-md mt-10 px-2 lg:mt-20 lg:text-2xl text-justify md:text-center lg:w-[1280px] w-[320px] ">
          A inclusão de produtos ou serviços não solicitados em contratos de empréstimo configura uma prática abusiva conhecida como venda casada,
          expressamente proibida pelo Código de Defesa do Consumidor. Entre os exemplos mais comuns estão: Seguro Prestamista, Pacotes de Serviços
          Bancários e Títulos de Capitalização.
        </p>

      </section>

      {/* 3 sessão pronto */}
      <section className="  flex flex-col relative">

        <div className="absolute top-10 left-10  z-10">
          <Logo />
        </div>

        <header className="flex flex-col bg-yellow-600 w-screen lg:h-[22vh] h-[20vh]">
          <h2 className="lg:text-5xl text-2xl font-bold ml-10 text-black mt-28">O que fazer?</h2>
        </header>

        <article className="flex flex-col md:flex-row gap-2 lg:px-44 bg-zinc-900 
          lg:w-screen h-[90vh] lg:h-[60vh] p-2 lg:p-10 md:0">

          <article data-aos="fade-left" className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col">
            <img alt="" width={100} src="/image/icon-graph.svg" className="self-center mb-5 md:mr-5 lg:w-[100px] w-[70px] h-[100]" />
            <div className="border-t-2 mt-4 ">
              <h2 className="text-white lg:mb-5 lg:text-4xl lg:mt-5">1º Passo</h2>

              <p className="text-white lg:text-2xl mt-2">Agende uma consulta com nossos advogados especialistas e realize uma análise
                gratuita do seu contrato.</p>
            </div>

          </article>

          <article data-aos="fade-right" className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col">
            <img alt="" width={100} src="/image/icon-money.svg" className="self-center lg:mb-5 md:mr-5 lg:w-[100px] w-[70px] h-[100]" />

            <div className="border-t-2 mt-4">
              <h2 className="text-white lg:mb-5 lg:text-4xl lg:mt-5">2º Passo</h2>
              <p className="text-white lg:text-2xl">Caso sejam identificadas taxas ou juros abusivos, atuamos diretamente junto ao banco
                para renegociar o seu contrato.</p>
            </div>
          </article>

          <article data-aos="fade-left" className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col">
            <img alt="" width={100} src="/image/icon-balance.svg" className="self-center mb-5 md:mr-5 lg:w-[100px] w-[70px] h-[100]" />
            <div className="border-t-2 mt-4">
              <h2 className="text-white mb-5 lg:text-4xl lg:mt-5">3º Passo</h2>
              <p className="text-white lg:text-2xl">Caso as medidas administrativas não sejam suficientes, é possível recorrer à via
                judicial para garantir seus direitos.</p>
            </div>
          </article>

        </article>
      </section>

      {/* 4 sessão pronto */}
      <section className="  flex relative h-[200vh] lg:h-[100vh] flex-col lg:flex-row">

        <div className="flex-1 bg-yellow-600 flex flex-col justify-center px-5 items-center">
          <h1 className=" font-extrabold p-4 w-full text-black text-7xl text-center"> Benefícios da <br /> revisão: </h1>

          <div data-aos="fade-up" className="bg-white lg:w-[600px] p-5 text-black w-full rounded-2xl" >
            <p data-aos="zoom-in" data-aos-deley="900" className="text-justify lg:text-2xl">
              A revisão de contratos de empréstimo consiste em uma
              análise detalhada das cláusulas contratuais, com o
              objetivo de identificar e corrigir eventuais irregularidades
              ou ilegalidades que resultem em onerosidade excessiva
              para o devedor, seja pessoa física ou jurídica. Esse processo
              visa reequilibrar a relação entre as partes, assegurando que
              os termos do contrato estejam em conformidade com a legislação
              vigente e com os princípios da boa-fé e da justiça contratual.
            </p>
          </div>
        </div>

        <div className="bg-black flex-1" data-aos="fade-down" data-aos-deley="500" >
          <div className="top-10 left-10 z-10 flex justify-end m-16">
            <Logo />
          </div>

          <div className="h-4/6">
            <ItemText conteudo="Redução do saldo devedor." />
            <ItemText conteudo="Diminuição do valor das parcelas." />
            <ItemText conteudo="Restituição dos valores pagos a maior, em dobro, com correção monetária e juros legais." />
            <ItemText conteudo="Anulação de cláusulas abusivas." />
            <ItemText conteudo="Renegociação do contrato em condições mais justas e equilibradas." />
            <ItemText conteudo="É possível realizar a revisão do contrato mesmo em casos de parcelas em atraso, 
                              independentemente de cobranças administrativas ou ações judiciais movidas pelo banco." />
          </div>

          <div>
            <p className="text-center"> Agende uma consulta para saber mais. </p>
          </div>
        </div>


      </section>

      {/* 5 sessão pronto Conheça Nossos Serviços */}
      <section className="  flex flex-col relative h-[100vh] justify-center max-w[1280px mx-auto] lg:h-screen bg-white">
        <div style={{
          backgroundImage: `url("./image/topo.png")`,
          width: '100%', height: '25vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>
          <h2 className="text-center text-white text-2xl mt-36 lg:mt-10 lg:text-6xl font-bold">Conheça nossos <br /> serviços</h2>

        </div>

        <div className="md:flex lg:mt-40 justify-evenly w-full m-2 text-black h-[75vh] pt-5 lg:p-10">

          <ItemBox data-aos="zoom-in" icon={<CiBag1 size={100} className="w-14 lg:w-56" />} title="Blindagem patrimonial"
            items={[
              { conteudoText: "Defesa estratégica em execuções fiscais" },
              { conteudoText: "Recuperação eficaz de créditos" },
              { conteudoText: "Revisão e planejamento tributário" },
              { conteudoText: "Elaboração e análise de contratos" },
              { conteudoText: "Regularização e gestão imobiliária" },
            ]}
          />

          <ItemBox icon={<FaHandshakeAngle size={100} className="w-14 lg:w-44" />} title="Trabalhista"
            items={[
              { conteudoText: "Defesa especializada em ações trabalhistas" },
              { conteudoText: "Gestão estratégica de riscos trabalhistas" },
              { conteudoText: "Acompanhamento técnico em perícias" },
            ]}
          />

          <ItemBox icon={<AiOutlineGlobal size={100} className="w-14 lg:w-44" />} title="Empresarial"
            items={[
              { conteudoText: "Registro de marcas e patentes" },
              { conteudoText: "Obtenção de licenças e alvarás" },
              { conteudoText: "Assessoria em licitações e editais" },
              { conteudoText: "Defesa em processos ambientais" },
            ]}
          />

          <ItemBox icon={<FaRegUser size={100} className="w-14 lg:w-44" />} title="Para você"
            items={[
              { conteudoText: "Benefícios de assistência social" },
              { conteudoText: "Previdência e planejamento financeiro" },
              { conteudoText: "Planos de saúde e cobertura médica" },
              { conteudoText: "Defesa em processos administrativos" },
            ]}
          />
        </div>

      </section>

      {/* 6 sessão  */}
      <section className="flex relative  h-[230vh] w-full md:w-screen lg:h-[100vh] " style={{
        backgroundImage: `url("./image/perfil-page.png")`,
        width: '100', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
      }}>

        <div className="absolute top-10 left-10  z-10">
          <Logo />
        </div>

        <div className="flex flex-col lg:flex-row w-screen md:justify-between md:bg-red-600 relative">

          <div className=" lg:w-[400px] mt-96 lg:mt-2 lg:ml-44 w-[90%] md:mr-60 md:w-[50%] md:flex md:gap-10 mx-auto flex flex-col h-96">
            <img data-aos="fade-down" src="./image/perfil.png" alt="" className="lg:mt-64 lg:ml-44 w-[400px] md:w-[300px] " />
            <h2 data-aos="fade-left" className="text-zinc-50 animate-pulse bg-zinc-950/50 p-2 px-5 rounded-md lg:text-3xl 
              text-2xl font-bold mt-96 lg:ml-64 ml-28 absolute lg:top-72 ">
              Iago Zalenda
            </h2>
          </div>

          <div data-aos="fade-up" style={{ height: "480px" }} className="w-[70vw] text-white lg:mt-44 bg-slate-900/70 mt-52 px-10 flex justify-center flex-col gap-3 rounded-lg lg:mr-64">
            <p data-aos="fade-up" data-aos-deley="900"> Zalenda Advogados é uma sociedade de advogados sediada em Porto Velho-RO, com atuação online em todo o território nacional, fortalecida por parcerias estratégicas. Fundado em 2015 por Iágo Zalenda, o escritório nasceu da expertise adquirida pelo sócio-fundador durante sua trajetória em renomados escritórios de advocacia, consolidando-se como uma referência no mercado jurídico. Hoje, conta com uma equipe de profissionais qualificados, dedicados a atuar de forma especializada e proativa na defesa dos interesses de seus clientes. </p>
            <p data-aos="fade-up" data-aos-deley="1700" className=""> Com vasta experiência no mercado financeiro, adquirida em instituições de destaque, Iágo Zalenda traz ao escritório um profundo conhecimento em operações bancárias e demandas empresariais de diversos setores, com ênfase em Direito Bancário, agronegócio, comércio e indústria. Essa expertise fortalece o posicionamento do Zalenda Advogados em questões complexas envolvendo instituições financeiras e negócios corporativos. </p>
            <p data-aos="fade-up" data-aos-deley="1900" className=""> Aliando uma estrutura robusta e tecnologia de ponta, o escritório oferece serviços jurídicos de excelência em todo o Brasil, garantindo eficiência, redução de custos e soluções personalizadas. O compromisso com a ética, a transparência e a confiabilidade consolida o Zalenda Advogados como uma referência em advocacia empresarial e bancária, sempre pautado pela cooperação e pela busca de resultados excepcionais. </p>
          </div>

        </div>

      </section>

      {/* 7 sessão Contato  */}
      <section className="  flex items-center lg:h-[100vh]">

        <div className="items-center justify-start lg:flex hidden"
          style={{
            backgroundImage: `url("./image/contato-left.png")`,
            width: '100%', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>

          <h2 data-aos="fade-left" className="text-black text-8xl font-bold lg:mt-[260px] lg:ml-96">Contato</h2>

        </div>


        <div className="flex p-20 lg:w-[50%] w-[100%]"
          style={{
            backgroundImage: `url("./image/contato-right.png")`,
            height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
          }}>

          <div className="p-10">
            <h3 className="text-6xl font-bold -ml-16 flex lg:hidden">Contato</h3>

            <div data-aos="fade-right" data-aos-delay="500" className="row mb-4 pt-12 -ml-10">
              <h3 className="font-bold text-black text-4xl">E-mail</h3>
              <p className="text-black text-xl">zalendaadvogados@gmail.com</p>
            </div>

            <div data-aos="fade-left" data-aos-delay="500" className="row mb-4 -ml-10">
              <h3 className="font-bold text-black text-4xl">Redes sociais</h3>
              <p className="text-black text-xl">@zalenda.advogados</p>
            </div>

            <div data-aos="fade-right" data-aos-delay="500" className="row -ml-10">
              <h3 className="font-bold text-black text-4xl">Telefone</h3>
              <p className="text-black text-xl">(69)99268-2118</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
