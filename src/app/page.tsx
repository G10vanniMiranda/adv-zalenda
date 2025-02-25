"use client";
import { Logo } from "@/components/logo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { CiBag1 } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { ItemBox } from "@/components/ItemBox";
import { FaHandshakeAngle, FaRegUser } from "react-icons/fa6";

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".home-item", {
      x: -10,
      opacity: 1,
      duration: 3,
    });
    return () => {
      gsap.killTweensOf(".home-item");
    };
  }, []);

  return (
    <div className="flex flex-col w-screen relative overflow-x-hidden">
      {/** WHATS OK TELEFONE */}
      <a
        href="https://api.whatsapp.com/send?phone=5569992682118&text=Quero%20fazer%20um%20agendamento%20hoje!"
        target="_blank"
      >
        <button className="z-50 fixed bottom-10 right-2 animate-pulse">
          <img src="./image/zap.png" className="w-28 lg:w-44" alt="" />
        </button>
      </a>

      {/* 1. sessão pronto */}
      <section
        data-aos="fade-up"
        className="flex flex-col items-center justify-center relative h-[70vh] w-full px-4"
      >
        <div className="absolute p-8 top-2 md:top-10 z-10">
          <Logo />
        </div>

        <img
          src="./image/home.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Home"
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-4">
          <h2 className="text-white text-xl font-bold bg-zinc-900/60 p-3 rounded-md leading-snug">
            Precisando de um especialisata em
            <span className="text-yellow-400"> DIREITO BANCARIO? </span>
            <br />
            <span className="font-normal text-sm">
              Descubra se você está pagando juros abusivos ou taxas indevidas.
            </span>
          </h2>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <img src="" alt="WhatsApp" className="w-5 h-5" />
            Fale com um especialista
          </a>
        </div>
      </section>

      {/* 2 sessão pronto Perfil */}
      <section
        className="flex flex-col items-center justify-start relative h-auto w-full md:w-screen lg:h-screen py-12"
        style={{
          backgroundImage: `url("./image/perfil-page.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center gap-10 lg:flex-row w-screen md:justify-between relative mt-10">
          <div className="flex flex-col items-center lg:w-[400px] w-[90%] md:w-[50%] mx-auto">
            <img
              data-aos="fade-down"
              src="./image/perfil.png"
              alt="Foto de perfil"
              className="w-[300px] md:w-[300px] lg:w-[400px]"
            />

            <h2
              data-aos="fade-left"
              className="text-zinc-50 animate-pulse bg-zinc-950/50 p-3 rounded-md text-2xl lg:text-3xl 
               font-bold mt-4 text-center"
            >
              Iago Zalenda
            </h2>
          </div>

          <div
            data-aos="fade-up"
            className="w-[90%] lg:w-[60%] text-white lg:mt-44 bg-slate-900/70 px-8 py-6 flex flex-col gap-6 rounded-lg text-justify shadow-lg mt-10"
          >
            <p data-aos="fade-up" data-aos-deley="900">
              {" "}
              Zalenda Advogados é uma sociedade de advogados sediada em Porto
              Velho-RO, com atuação online em todo o território nacional,
              fortalecida por parcerias estratégicas. Fundado em 2015 por Iágo
              Zalenda, o escritório nasceu da expertise adquirida pelo
              sócio-fundador durante sua trajetória em renomados escritórios de
              advocacia, consolidando-se como uma referência no mercado
              jurídico. Hoje, conta com uma equipe de profissionais
              qualificados, dedicados a atuar de forma especializada e proativa
              na defesa dos interesses de seus clientes.{" "}
            </p>
            <p data-aos="fade-up" data-aos-deley="1700" className="">
              {" "}
              Com vasta experiência no mercado financeiro, adquirida em
              instituições de destaque, Iágo Zalenda traz ao escritório um
              profundo conhecimento em operações bancárias e demandas
              empresariais de diversos setores, com ênfase em Direito Bancário,
              agronegócio, comércio e indústria. Essa expertise fortalece o
              posicionamento do Zalenda Advogados em questões complexas
              envolvendo instituições financeiras e negócios corporativos.{" "}
            </p>
            <p data-aos="fade-up" data-aos-deley="1900" className="">
              {" "}
              Aliando uma estrutura robusta e tecnologia de ponta, o escritório
              oferece serviços jurídicos de excelência em todo o Brasil,
              garantindo eficiência, redução de custos e soluções
              personalizadas. O compromisso com a ética, a transparência e a
              confiabilidade consolida o Zalenda Advogados como uma referência
              em advocacia empresarial e bancária, sempre pautado pela
              cooperação e pela busca de resultados excepcionais.{" "}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <a
              href="wa.me/5569992682118"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <img
                src="./image/whatsapp-icon.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              Atendimento via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 3 sessão pronto Conheça nossos serviços */}
      <section className="flex flex-col relative min-h-screen justify-start max-w-[1280px] mx-auto bg-white">
        <div
          className="relative w-full h-[30vh] bg-cover bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `url("./image/topo.png")`,
          }}
        >
          <h2 className="absolute top-5 text-center pt-16 text-white text-3xl lg:text-5xl font-bold">
            Conheça nossos <br /> serviços
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 w-full p-5 lg:p-10 text-black">
          <ItemBox
            data-aos="zoom-in"
            icon={<CiBag1 size={100} className="w-14 lg:w-20" />}
            title="Blindagem patrimonial"
            items={[
              { conteudoText: "Defesa estratégica em execuções fiscais" },
              { conteudoText: "Recuperação eficaz de créditos" },
              { conteudoText: "Revisão e planejamento tributário" },
              { conteudoText: "Elaboração e análise de contratos" },
              { conteudoText: "Regularização e gestão imobiliária" },
            ]}
          />

          <ItemBox
            icon={<FaHandshakeAngle size={100} className="w-14 lg:w-20" />}
            title="Trabalhista"
            items={[
              { conteudoText: "Defesa especializada em ações trabalhistas" },
              { conteudoText: "Gestão estratégica de riscos trabalhistas" },
              { conteudoText: "Acompanhamento técnico em perícias" },
            ]}
          />

          <ItemBox
            icon={<AiOutlineGlobal size={100} className="w-14 lg:w-20" />}
            title="Empresarial"
            items={[
              { conteudoText: "Registro de marcas e patentes" },
              { conteudoText: "Obtenção de licenças e alvarás" },
              { conteudoText: "Assessoria em licitações e editais" },
              { conteudoText: "Defesa em processos ambientais" },
            ]}
          />

          <ItemBox
            icon={<FaRegUser size={100} className="w-14 lg:w-20" />}
            title="Para você"
            items={[
              { conteudoText: "Benefícios de assistência social" },
              { conteudoText: "Previdência e planejamento financeiro" },
              { conteudoText: "Planos de saúde e cobertura médica" },
              { conteudoText: "Defesa em processos administrativos" },
            ]}
          />
        </div>
      </section>

      {/* 4 sessão pronto O que fazer */}
      <section className="relative flex flex-col min-h-screen">
        <div className="absolute top-5 left-5 z-10">
          <Logo />
        </div>

        <header className="flex flex-col justify-center bg-yellow-600 w-full lg:h-[22vh] h-[20vh]">
          <h2 className="lg:text-5xl text-2xl font-bold ml-10 text-black">
            O que fazer?
          </h2>
        </header>

        <article
          className="flex flex-col md:flex-row gap-2 lg:px-44 bg-zinc-900 
          lg:w-screen h-[90vh] lg:h-[60vh] p-2 lg:p-10 md:0"
        >
          <article
            data-aos="fade-left"
            className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col"
          >
            <img
              alt=""
              width={100}
              src="/image/icon-graph.svg"
              className="self-center mb-5 md:mr-5 lg:w-[100px] w-[70px] h-[100]"
            />
            <div className="border-t-2 mt-4 ">
              <h2 className="text-white lg:mb-5 lg:text-4xl lg:mt-5">
                1º Passo
              </h2>

              <p className="text-white lg:text-2xl mt-2">
                Agende uma consulta com nossos advogados especialistas e realize
                uma análise gratuita do seu contrato.
              </p>
            </div>
          </article>

          <article
            data-aos="fade-right"
            className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col"
          >
            <img
              alt=""
              width={100}
              src="/image/icon-money.svg"
              className="self-center lg:mb-5 md:mr-5 lg:w-[100px] w-[70px] h-[100]"
            />

            <div className="border-t-2 mt-4">
              <h2 className="text-white lg:mb-5 lg:text-4xl lg:mt-5">
                2º Passo
              </h2>
              <p className="text-white lg:text-2xl">
                Caso sejam identificadas taxas ou juros abusivos, atuamos
                diretamente junto ao banco para renegociar o seu contrato.
              </p>
            </div>
          </article>

          <article
            data-aos="fade-left"
            className="flex-1 md:p-8 lg:mt-20 flex flex-col w-[350px] mx-auto items-center md:flex-col"
          >
            <img
              alt=""
              width={100}
              src="/image/icon-balance.svg"
              className="self-center mb-5 md:mr-5 lg:w-[100px] w-[70px] h-[100]"
            />
            <div className="border-t-2 mt-4">
              <h2 className="text-white mb-5 lg:text-4xl lg:mt-5">3º Passo</h2>
              <p className="text-white lg:text-2xl">
                Caso as medidas administrativas não sejam suficientes, é
                possível recorrer à via judicial para garantir seus direitos.
              </p>
            </div>
          </article>
        </article>

        <div className="flex justify-center bg-zinc-900">
          <a
            href="wa.me/5569992682118"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <img
              src="./image/whatsapp-icon.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            Atendimento via WhatsApp
          </a>
        </div>
      </section>

      {/* 5 sessão pronto Contato */}
      <section className="flex items-center justify-center h-96 w-screen lg:h-[100vh]">
        <div
          className="items-center justify-start lg:flex hidden"
          style={{
            backgroundImage: `url("./image/contato-left.png")`,
            width: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2
            data-aos="fade-left"
            className="text-black text-8xl font-bold lg:mt-[260px] lg:ml-96"
          >
            Contato
          </h2>
        </div>

        <div
          className="flex p-20 lg:w-[50%] w-[100%]"
          style={{
            backgroundImage: `url("./image/contato-right.png")`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center w-full">
            <h3 className="text-6xl font-bold -ml-16 flex lg:hidden">
              Contato
            </h3>

            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="row mb-4 pt-12 -ml-10"
            >
              <h3 className="font-bold text-black text-4xl">E-mail</h3>
              <p className="text-black text-xl">zalendaadvogados@gmail.com</p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="row mb-4 -ml-10"
            >
              <h3 className="font-bold text-black text-4xl">Redes sociais</h3>
              <p className="text-black text-xl">@zalenda.advogados</p>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="row -ml-10"
            >
              <h3 className="font-bold text-black text-4xl">Telefone</h3>
              <p className="text-black text-xl">(69)99268-2118</p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <p>@2025 | Mi7anda</p>
      </div>
    </div>
  );
}
