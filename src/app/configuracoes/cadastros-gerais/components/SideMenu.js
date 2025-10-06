'use client'
import { Outfit400 } from '@/fonts'
import { ArrowDown2, ArrowUp2 } from 'iconsax-reactjs'
import { useState } from 'react'

const SideMenu = ({ page, setPage }) => {
  const [openMenuPrincipais, setOpenMenuPrincipais] = useState(true)
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
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>Salas / Setores</span>
          </div>
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>
              Equipamentos / Imobilizados
            </span>
          </div>
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>
              Etiquetas para amostra
            </span>
          </div>
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
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>
              Cabeçalhos / Ropdapés
            </span>
          </div>
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>
              Formulários de atendimento
            </span>
          </div>
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
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>Adquirentes</span>
          </div>
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>Hierarquia CFO</span>
          </div>
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
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>
              Importação de tabelas
            </span>
          </div>
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>Integrações</span>
          </div>
          <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
            <span className={`${Outfit400.className} `}>
              Campos do formulário
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default SideMenu
