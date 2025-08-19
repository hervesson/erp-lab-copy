import Image from 'next/image'
import { useState } from 'react'

import {
  ArrowDown2,
  Data2,
  Logout,
  MessageSearch,
  Notification,
  PlayCircle,
  Setting2,
  Setting3,
  User,
  UserSearch,
} from 'iconsax-reactjs'
import Divider from '../Divider'

import { Outfit400, Outfit500 } from '@/fonts'
import Avatar from '../../../public/assets/images/avatar.png'
import clinic from '../../../public/assets/images/clinic.png'

// Sections
import Administrative from './components/administrative'
import Configs from './components/configs'
import Data from './components/data'
import Notifications from './components/notifications'
import Service from './components/service'
import Suport from './components/suport'
import Tutos from './components/tutos'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [section, setSection] = useState('Atendimento')

  const sections = {
    Atendimento: <Service />,
    Administrativo: <Administrative />,
    Configurações: <Configs />,
    Dados: <Data />,
    Tutoriais: <Tutos />,
    Notificações: <Notifications />,
    Suporte: <Suport />,
  }

  return (
    <div className="m-[8px] flex">
      <div
        style={{ width: isOpen ? '369px' : '76px' }}
        className={`flex flex-col rounded-[8px] bg-[#171717] transition-all duration-300 ease-in-out`}
        onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex h-[63px] items-center justify-center text-[#494949]">
          LOGO
        </div>
        <Divider />

        <div className="flex items-center">
          <div className="flex h-[72px] w-[76px] items-center justify-center">
            <Image src={clinic} height="48" width="48" alt="img" />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="flex h-[50px] w-[283px] items-center justify-between rounded bg-[#222222] px-[10px]">
              <div className="">
                <p
                  className={`text-[#0F9B7F] ${Outfit400.className} text-[13px]`}
                >
                  Unidade Marechal
                </p>
                <p
                  className={`text-[#0F9B7F] ${Outfit500.className} text-[14px] text-white`}
                >
                  00.000.000/0001-09
                </p>
              </div>
              <ArrowDown2 size="28" color="#A1A1A1" />
            </div>
          </div>
        </div>

        <Divider />
        <div className="flex flex-1">
          <div className="flex w-[76px] flex-col items-center">
            <div
              onClick={() => setSection('Atendimento')}
              className={`mt-[24px] flex h-[36px] w-[36px] items-center justify-center rounded ${
                section === 'Atendimento'
                  ? 'bg-[#0F9B7F]'
                  : 'hover:bg-[#0F9B7F]'
              }`}
            >
              <UserSearch
                size="28"
                color={section === 'Atendimento' ? '#000' : '#A1A1A1'}
                className="self-center"
                variant={section === 'Atendimento' ? 'Bulk' : 'Linear'}
              />
            </div>
            <div
              onClick={() => setSection('Administrativo')}
              className={`mt-[24px] flex h-[36px] w-[36px] items-center justify-center rounded ${
                section === 'Administrativo'
                  ? 'bg-[#0F9B7F]'
                  : 'hover:bg-[#0F9B7F]'
              }`}
            >
              <Setting3
                size="28"
                color={section === 'Administrativo' ? '#000' : '#A1A1A1'}
                className="self-center"
                variant={section === 'Administrativo' ? 'Bulk' : 'Linear'}
              />
            </div>
            <div
              onClick={() => setSection('Configurações')}
              className={`mt-[24px] flex h-[36px] w-[36px] items-center justify-center rounded ${
                section === 'Configurações'
                  ? 'bg-[#0F9B7F]'
                  : 'hover:bg-[#0F9B7F]'
              }`}
            >
              <Setting2
                size="28"
                color={section === 'Configurações' ? '#000' : '#A1A1A1'}
                className="self-center"
                variant={section === 'Configurações' ? 'Bulk' : 'Linear'}
              />
            </div>
            <div
              onClick={() => setSection('Dados')}
              className={`mt-[24px] flex h-[36px] w-[36px] items-center justify-center rounded ${
                section === 'Dados' ? 'bg-[#0F9B7F]' : 'hover:bg-[#0F9B7F]'
              }`}
            >
              <Data2
                size="28"
                color={section === 'Dados' ? '#000' : '#A1A1A1'}
                className="self-center"
                variant={section === 'Dados' ? 'Bulk' : 'Linear'}
              />
            </div>

            <p className="mt-[12px] self-center text-[#A1A1A1]">-</p>
            <div
              onClick={() => setSection('Tutoriais')}
              className={`mt-[24px] flex h-[36px] w-[36px] items-center justify-center rounded ${
                section === 'Tutoriais' ? 'bg-[#0F9B7F]' : 'hover:bg-[#0F9B7F]'
              }`}
            >
              <PlayCircle
                size="28"
                color={section === 'Tutoriais' ? '#000' : '#A1A1A1'}
                className="self-center"
                variant={section === 'Tutoriais' ? 'Bulk' : 'Linear'}
              />
            </div>
            <div
              onClick={() => setSection('Notificações')}
              className={`mt-[24px] flex h-[36px] w-[36px] items-center justify-center rounded ${
                section === 'Notificações'
                  ? 'bg-[#0F9B7F]'
                  : 'hover:bg-[#0F9B7F]'
              }`}
            >
              <Notification
                size="28"
                color={section === 'Notificações' ? '#000' : '#A1A1A1'}
                className="self-center"
                variant={section === 'Notificações' ? 'Bulk' : 'Linear'}
              />
            </div>

            <div className="flex flex-1 items-end justify-center">
              <div className="flex flex-col py-3">
                <div
                  onClick={() => setSection('Suporte')}
                  className={`mt-[24px] flex h-[36px] w-[36px] items-center justify-center rounded ${
                    section === 'Suporte'
                      ? 'bg-[#0F9B7F]'
                      : 'hover:bg-[#0F9B7F]'
                  }`}
                >
                  <MessageSearch
                    size="28"
                    color={section === 'Suporte' ? '#000' : '#A1A1A1'}
                    className="self-center"
                    variant={section === 'Suporte' ? 'Bulk' : 'Linear'}
                  />
                </div>

                <Image
                  src={Avatar}
                  height="44"
                  width="44"
                  alt="img"
                  className="self-center pt-[24px]"
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-1 flex-col bg-[#0E0E0E]"
            style={{ display: isOpen ? 'flex' : 'none' }}
          >
            <div className="mx-[12px] my-[20px]">
              <p
                className={`${Outfit400.className} text-[14px] text-white uppercase`}
              >
                {section}
              </p>
            </div>

            <div className="flex flex-1">{sections[section]}</div>

            <div className="flex h-[224px] w-[297px] items-center justify-center self-end bg-[#171717]">
              <div className="flex h-[200px] w-[273px] flex-col justify-evenly rounded bg-[#222222]">
                <div className="mx-3 flex h-[72px] items-center gap-3 rounded bg-[#0E0E0E] px-3">
                  <Image
                    src={Avatar}
                    height="48"
                    width="48"
                    alt="img"
                    className=""
                  />
                  <div>
                    <p
                      className={`${Outfit400.className} text-[13px] text-[#FFF]`}
                    >
                      Master
                    </p>
                    <p
                      className={`${Outfit400.className} text-[14px] text-[#F9852E]`}
                    >
                      Rafael Bitencurt
                    </p>
                  </div>
                </div>
                <div className="mx-3 flex gap-5">
                  <User size="28" color="#A1A1A1" />
                  <p
                    className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}
                  >
                    Perfil
                  </p>
                </div>
                <div className="mx-3 flex gap-5">
                  <Logout size="28" color="#A1A1A1" />
                  <p
                    className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}
                  >
                    Sair da conta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
