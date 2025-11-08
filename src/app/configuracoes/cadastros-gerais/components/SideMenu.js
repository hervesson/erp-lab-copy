'use client'
import { Outfit400 } from '@/fonts'
import { ArrowDown2, ArrowUp2 } from 'iconsax-reactjs'
import { useState } from 'react'

const SideMenu = ({ page, setPage }) => {
  const [openMenuPrincipais, setOpenMenuPrincipais] = useState(true)
  const [openMenuEmpresas, setOpenMenuEmpresas] = useState(true)
  const [openMenuEstrutura, setOpenMenuEstrutura] = useState(true)
  const [openMenuDocumentacao, setOpenMenuDocumentacao] = useState(true)
  const [openMenuFiananceiro, setOpenMenuFiananceiro] = useState(true)
  const [openMenuOutros, setOpenMenuOutros] = useState(true)

  return (
    <div className="w-[281px] rounded-[8px] bg-[#F9F9F9] p-[16px]">
      <div className="flex h-[24px] items-center justify-between">
        <span className={`${Outfit400.className} text-[#222222]`}>
          Principais
        </span>
        {openMenuPrincipais ? (
          <ArrowUp2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuPrincipais(!openMenuPrincipais)}
          />
        ) : (
          <ArrowDown2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuPrincipais(!openMenuPrincipais)}
          />
        )}
      </div>
      {openMenuPrincipais && (
        <div className="mt-[8px] flex flex-col gap-[4px]">
          <button
            onClick={() => setPage('unidades-de-saude')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'unidades-de-saude'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Unidades de Saúde</span>
          </button>
          <button
            onClick={() => setPage('exames')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'exames'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Exames</span>
          </button>
          <button
            onClick={() => setPage('matriz-de-exames')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'matriz-de-exames'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Matrizes de exames
            </span>
          </button>
          <button
            onClick={() => setPage('profissionais')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'profissionais'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Profissionais</span>
          </button>
          <button
            onClick={() => setPage('usuarios')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'usuarios'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Usuários</span>
          </button>
          <button
            onClick={() => setPage('agendas')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'agendas'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Agendas</span>
          </button>
          <button
            onClick={() => setPage('metodos')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'metodos'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Metodos</span>
          </button>
          <button
            onClick={() => setPage('amostras')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'amostras'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Amostras</span>
          </button>
          <button
            onClick={() => setPage('kits')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'kits'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Kits</span>
          </button>
        </div>
      )}

      <div className="mt-[16px] flex h-[24px] items-center justify-between">
        <span className={`${Outfit400.className} text-[#222222]`}>
          Empresas
        </span>
        {openMenuEmpresas ? (
          <ArrowUp2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuEmpresas(!openMenuEmpresas)}
          />
        ) : (
          <ArrowDown2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuEmpresas(!openMenuEmpresas)}
          />
        )}
      </div>
      {openMenuEmpresas && (
        <div className="mt-[8px] flex flex-col gap-[4px]">
          <button
            onClick={() => setPage('convenios')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'convenios'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Convênios</span>
          </button>
          <button
            onClick={() => setPage('laboratorioDeApoio')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'laboratorioDeApoio'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Laboratório de apoio
            </span>
          </button>
          <button
            onClick={() => setPage('telemedicina')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'telemedicina'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Telemedicina</span>
          </button>
          <button
            onClick={() => setPage('fornecedores')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'fornecedores'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Fornecedores</span>
          </button>
          <button
            onClick={() => setPage('prestadoresDeServico')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'prestadoresDeServico'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Prestadores de serviço
            </span>
          </button>
          <button
            onClick={() => setPage('tabelaDePrecos')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'tabelaDePrecos'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Tabela de preços</span>
          </button>
        </div>
      )}

      <div className="mt-[16px] flex h-[24px] items-center justify-between">
        <span className={`${Outfit400.className} text-[#222222]`}>
          Estrutura
        </span>
        {openMenuEstrutura ? (
          <ArrowUp2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuEstrutura(!openMenuEstrutura)}
          />
        ) : (
          <ArrowDown2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuEstrutura(!openMenuEstrutura)}
          />
        )}
      </div>
      {openMenuEstrutura && (
        <div className="mt-[8px] flex flex-col gap-[4px]">
          <button
            onClick={() => setPage('salasSetores')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'salasSetores'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Salas / Setores</span>
          </button>
          <button
            onClick={() => setPage('equipamentosImobilizados')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'equipamentosImobilizados'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Equipamentos / Imobilizados
            </span>
          </button>
          <button
            onClick={() => setPage('etiquetasParaAmostras')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'etiquetasParaAmostras'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Etiquetas para amostra
            </span>
          </button>
        </div>
      )}

      <div className="mt-[16px] flex h-[24px] items-center justify-between">
        <span className={`${Outfit400.className} text-[#222222]`}>
          Documentação
        </span>
        {openMenuDocumentacao ? (
          <ArrowUp2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuDocumentacao(!openMenuDocumentacao)}
          />
        ) : (
          <ArrowDown2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuDocumentacao(!openMenuDocumentacao)}
          />
        )}
      </div>
      {openMenuDocumentacao && (
        <div className="mt-[8px] flex flex-col gap-[4px]">
          <button
            onClick={() => setPage('cabecalhoRodapes')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'cabecalhoRodapes'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Cabeçalhos / Rodapés
            </span>
          </button>
          <button
            onClick={() => setPage('formulariosDeAtendimento')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'formulariosDeAtendimento'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Formulários de atendimento
            </span>
          </button>
        </div>
      )}

      <div className="mt-[16px] flex h-[24px] items-center justify-between">
        <span className={`${Outfit400.className} text-[#222222]`}>
          Financeiro
        </span>
        {openMenuFiananceiro ? (
          <ArrowUp2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuFiananceiro(!openMenuFiananceiro)}
          />
        ) : (
          <ArrowDown2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuFiananceiro(!openMenuFiananceiro)}
          />
        )}
      </div>
      {openMenuFiananceiro && (
        <div className="mt-[8px] flex flex-col gap-[4px]">
          <button
            onClick={() => setPage('bancos')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'bancos'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Bancos</span>
          </button>
          <button
            onClick={() => setPage('adquirentes')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'adquirentes'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Adquirentes</span>
          </button>
          <button
            onClick={() => setPage('hierarquiaCFO')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'hierarquiaCFO'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Hierarquia CFO</span>
          </button>
        </div>
      )}

      <div className="mt-[16px] flex h-[24px] items-center justify-between">
        <span className={`${Outfit400.className} text-[#222222]`}>Outros</span>
        {openMenuOutros ? (
          <ArrowUp2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuOutros(!openMenuOutros)}
          />
        ) : (
          <ArrowDown2
            size="28"
            color="#A1A1A1"
            onClick={() => setOpenMenuOutros(!openMenuOutros)}
          />
        )}
      </div>
      {openMenuOutros && (
        <div className="mt-[8px] flex flex-col gap-[4px]">
          <button
            onClick={() => setPage('importacaoDeTabelas')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'importacaoDeTabelas'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Importação de tabelas
            </span>
          </button>
          <button
            onClick={() => setPage('integracoes')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'integracoes'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>Integrações</span>
          </button>
          <button
            onClick={() => setPage('campos-de-fomulario')}
            className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
              page === 'campos-de-fomulario'
                ? 'bg-[#0F9B7F] text-white'
                : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
            }`}
          >
            <span className={`${Outfit400.className} `}>
              Campos de formulário
            </span>
          </button>
        </div>
      )}
    </div>
  )
}

export default SideMenu
