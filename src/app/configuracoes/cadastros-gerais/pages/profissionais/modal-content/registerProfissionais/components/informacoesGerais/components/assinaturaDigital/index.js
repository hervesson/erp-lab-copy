import ModalFramer from '@/components/ModalFramer'
import { Outfit300, Outfit400 } from '@/fonts'
import { InfoCircle, Link } from 'iconsax-reactjs'
import { useState } from 'react'

import ErroVinculo from './components/ErroVinculo'
import FormCert from './components/FormCert'
import RemoveVinculo from './components/RemoveVinculo'
import SuccessRemove from './components/SucessRemove'
import SuccessVinculo from './components/SucessVinculo'

const AssinaturaDigital = ({ formik }) => {
  const [openModalForm, setOpenModalForm] = useState(false)
  const [openModalSuccess, setOpenModalSuccess] = useState(false)
  const [openModalError, setOpenModalError] = useState(false)
  const [openModalRemove, setOpenModalRemove] = useState(false)
  const [openModalSuccessRemove, setOpenModalSucessRemove] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <span className={`${Outfit400.className} h-7 text-[16px] text-[#0F9B7F]`}>
        Assinatura digital
      </span>

      <div className="flex flex-col gap-4">
        <div className="flex flex-1 gap-2">
          <button
            onClick={() => setOpenModalForm(true)}
            type="button"
            className={`${Outfit400.className} ${formik.values.certificado ? 'border border-[#F23434] text-[#F23434]' : 'border border-[#0F9B7F] text-[#0F9B7F]'} flex h-10 w-[235px] items-center justify-evenly rounded-lg`}
          >
            <Link
              size="28"
              color={formik.values.certificado ? '#F23434' : '#0F9B7F'}
              variant="TwoTone"
            />
            {formik.values.certificado
              ? 'REMOVER ASSINATURA'
              : 'VINCULAR ASSINATURA'}
          </button>
          {formik.values.certificado ? (
            <div className="flex h-10 items-center gap-2 rounded-lg bg-[#E9FDEE] px-3">
              <InfoCircle size="20" color="#2CB04B" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#2CB04B]`}
              >
                Certificado vinculado com sucesso
              </label>
            </div>
          ) : (
            <div className="flex h-10 items-center gap-2 rounded-lg bg-[#E7E7E7] px-3">
              <InfoCircle size="20" color="#737373" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#737373]`}
              >
                Assinatura pendente
              </label>
            </div>
          )}
        </div>
      </div>

      {openModalForm && (
        <ModalFramer
          open={openModalForm}
          setOpen={() => setOpenModalForm(false)}
        >
          <FormCert onClose={() => setOpenModalForm(false)} />
        </ModalFramer>
      )}

      {openModalSuccess && (
        <ModalFramer
          open={openModalSuccess}
          setOpen={() => setOpenModalSuccess(false)}
        >
          <SuccessVinculo onClose={() => setOpenModalSuccess(false)} />
        </ModalFramer>
      )}

      {openModalError && (
        <ModalFramer
          open={openModalError}
          setOpen={() => setOpenModalError(false)}
        >
          <ErroVinculo onClose={() => setOpenModalError(false)} />
        </ModalFramer>
      )}

      {openModalRemove && (
        <ModalFramer
          open={openModalRemove}
          setOpen={() => setOpenModalRemove(false)}
        >
          <RemoveVinculo onClose={() => setOpenModalRemove(false)} />
        </ModalFramer>
      )}

      {openModalSuccessRemove && (
        <ModalFramer
          open={openModalSuccessRemove}
          setOpen={() => setOpenModalSucessRemove(false)}
        >
          <SuccessRemove onClose={() => setOpenModalSucessRemove(false)} />
        </ModalFramer>
      )}
    </div>
  )
}

export default AssinaturaDigital
