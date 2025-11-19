import SuccessRegister from '@/components/Alerts/SuccessRegister'
import ModalFramer from '@/components/ModalFramer'
import { Outfit400 } from '@/fonts'
import { CreateEnterprise } from '@/helpers'
import { useFormik } from 'formik'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { toast } from 'react-toastify'
import { validationSchemaEnterprises } from '../schemas'
import InformacoesGerais from './components/informacoesGerais'

const PrestadoresDeServico = forwardRef(
  (
    { formRegister, states, onClose, onValidationChange, setLoading, findData },
    ref,
  ) => {
    const [tab, setTab] = useState('informacoesGerais')
    const [openModalAlerts, setOpenModalAlerts] = useState(false)

    const formik = useFormik({
      validationSchema: validationSchemaEnterprises,
      validateOnBlur: false,
      validateOnChange: true,
      initialValues: {
        codigoInterno: formRegister.values.codigoInterno,
        cnpj: formRegister.values.cnpj,
        razaoSocial: formRegister.values.razaoSocial,
        nomeFantasia: formRegister.values.nomeFantasia,
        inscricaoMunicipal: formRegister.values.inscricaoMunicipal,
        inscricaoEstadual: formRegister.values.inscricaoEstadual,
        telefoneFixo: formRegister.values.telefoneFixo,
        celular: formRegister.values.celular,
        emailComercial: formRegister.values.emailComercial,
        siteDaEmpresa: formRegister.values.siteDaEmpresa,
        cep: formRegister.values.cep,
        rua: formRegister.values.rua,
        numero: formRegister.values.numero,
        bairro: formRegister.values.bairro,
        complemento: formRegister.values.complemento,
        estado: formRegister.values.estado,
        cidade: formRegister.values.cidade,
        nomeDoResponsavel: formRegister.values.nomeDoResponsavel,
        cargoResponsavel: formRegister.values.cargoResponsavel,
        contatoResponsavel: formRegister.values.contatoResponsavel,
        email: formRegister.values.email,
        irrf: formRegister.values.irrf,
        pis: formRegister.values.pis,
        cofins: formRegister.values.cofins,
        csll: formRegister.values.csll,
        iss: formRegister.values.iss,
        ibs: formRegister.values.ibs,
        cbs: formRegister.values.cbs,
        reterISS: formRegister.values.reterISS,
        reterIR: formRegister.values.reterIR,
        reterPCC: formRegister.values.reterPCC,
        reterIBS: formRegister.values.reterIBS,
        reterCBS: formRegister.values.reterCBS,
        optantePeloSimples: formRegister.values.optantePeloSimples,
        financeiro: formRegister.values.financeiro,
        formaDePagamento: formRegister.values.formaDePagamento,
      },
      onSubmit: async (values) => {
        setLoading(true)
        const payload = {
          tipoEmpresa: 'PRESTADORES_SERVICOS', // "CONVENIOS", LABORATORIO_APOIO", "TELEMEDICINA", "FORNECEDORES", "PRESTADORES_SERVICOS"
          codigoInterno: values.codigoInterno,
          cnpj: values.cnpj,
          razaoSocial: values.razaoSocial,
          nomeFantasia: values.nomeFantasia,
          inscricaoEstadual: values.inscricaoEstadual,
          inscricaoMunicipal: values.inscricaoMunicipal,
          telefoneFixo: values.telefoneFixo,
          celular: values.celular,
          emailComercial: values.emailComercial,
          siteEmpresa: values.siteDaEmpresa,
          cep: values.cep,
          rua: values.rua,
          numero: values.numero,
          bairro: values.bairro,
          complemento: values.complemento,
          estado: values.estado.label,
          cidade: values.cidade.label,
          nomeResponsavel: values.nomeDoResponsavel,
          cargoResponsavel: values.cargoResponsavel,
          contatoResponsavel: values.contatoResponsavel,
          emailResponsavel: values.email,
          irrfPercentual: values.irrf || 0,
          pisPercentual: values.pis || 0,
          cofinsPercentual: values.cofins || 0,
          csllPercentual: values.csll || 0,
          issPercentual: values.iss || 0,
          reterIss: values.reterISS,
          reterIr: values.reterIR,
          reterPcc: values.reterPCC,
          optanteSimplesNacional: values.optantePeloSimples,
          contasBancarias: values.financeiro.map((item) => {
            return {
              banco_id: item.bancoId,
              tipo_conta: item.tipoDeConta.id,
              agencia: item.agencia,
              digito_agencia: item.digitoAgencia,
              numero_conta: item.conta,
              digito_conta: item.digitoConta,
            }
          }),
          ativo: true,
          formaPagamento: values.formaDePagamento.id,
        }
        try {
          const responseCreateEnterprise = await CreateEnterprise(payload)

          if (responseCreateEnterprise.success) {
            setOpenModalAlerts(true)
            findData()
          } else {
            responseCreateEnterprise.error.erros.forEach((element) => {
              toast.error(element, {
                position: 'top-right',
              })
            })
          }
        } catch (error) {
          console.log('erro', error)
        } finally {
          setLoading(false)
        }
      },
    })

    const touchAll = (values) => {
      if (Array.isArray(values)) return values.map(touchAll)
      if (values && typeof values === 'object') {
        const out = {}
        Object.keys(values).forEach((k) => {
          out[k] = touchAll(values[k])
        })
        return out
      }
      return true
    }

    // coleta mensagens de erro (objetos/arrays) em um array plano
    const collectErrorMessages = (errs, path = '') => {
      if (!errs) return []
      if (typeof errs === 'string') return [errs]

      if (Array.isArray(errs)) {
        return errs.flatMap((item, i) => {
          const label = path ? `${path}[${i + 1}]` : `[${i + 1}]`
          return collectErrorMessages(item, label)
        })
      }

      if (typeof errs === 'object') {
        return Object.entries(errs).flatMap(([key, val]) => {
          const nextPath = path ? `${path}.${key}` : key
          return collectErrorMessages(val, nextPath)
        })
      }
      return []
    }

    // valida tudo; se houver erros, 1 toast; se ok, submete
    const submitWithToast = async () => {
      const errors = await formik.validateForm()
      if (Object.keys(errors).length > 0) {
        formik.setTouched(touchAll(formik.values), false)

        const msgs = collectErrorMessages(errors)
        const max = 6
        const head = msgs.slice(0, max).join('\n')
        const tail = msgs.length > max ? `\n+${msgs.length - max} outros…` : ''

        toast.dismiss('form-errors')
        toast.error(`${head}${tail}`, {
          toastId: 'form-errors',
          autoClose: 6000,
          style: { whiteSpace: 'pre-line' },
        })
        return
      }
      await formik.submitForm()
    }

    useImperativeHandle(ref, () => ({
      submitForm: submitWithToast,
    }))

    useEffect(() => {
      // onValidationChange é a prop que o pai nos enviou
      onValidationChange(formik.isValid)
    }, [formik.isValid, onValidationChange])

    const steps = {
      informacoesGerais: <InformacoesGerais formik={formik} states={states} />,
    }

    return (
      <div className="mx-[48px] my-[28px] flex h-fit flex-1 flex-col rounded">
        <div className="flex h-[56px] items-center gap-8 px-[48px]">
          <button
            type="button"
            onClick={() => setTab('informacoesGerais')}
            className={`${Outfit400.className} ${tab === 'informacoesGerais' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
          >
            INFORMAÇÕES GERAIS
          </button>
          <button
            type="button"
            onClick={() => setTab('informacoesEspecificas')}
            className={`${Outfit400.className} ${tab === 'informacoesEspecificas' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
          >
            INFORMAÇÕES ESPECÍFICAS
          </button>
        </div>
        {steps[tab]}
        {openModalAlerts && (
          <ModalFramer
            open={openModalAlerts}
            setOpen={() => setOpenModalAlerts(false)}
          >
            <SuccessRegister
              onClose={() => {
                setOpenModalAlerts(false)
                formik.resetForm()
              }}
              onCloseRegister={() => {
                setOpenModalAlerts(false)
                onClose()
              }}
            />
          </ModalFramer>
        )}
      </div>
    )
  },
)

PrestadoresDeServico.displayName = 'ChildComponentPatiente'

export default PrestadoresDeServico
