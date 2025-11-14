import { Outfit400 } from '@/fonts'
import { UpdateEnterprise } from '@/helpers'
import { useFormik } from 'formik'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { toast } from 'react-toastify'
import { validationSchemaEnterprises } from '../schemas'
import InformacoesGerais from './components/informacoesGerais'

const Telemedicina = forwardRef(
  (
    {
      formRegister,
      activeBanks,
      onClose,
      onValidationChange,
      setLoading,
      findData,
    },
    ref,
  ) => {
    const [tab, setTab] = useState('informacoesGerais')

    const payments = {
      'Transferência Bancária': {
        id: 'Transferência Bancária',
        label: 'Transferência Bancária',
      },
      Pix: {
        id: 'Pix',
        label: 'Pix',
      },
    }

    const formik = useFormik({
      validationSchema: validationSchemaEnterprises,
      validateOnBlur: false,
      validateOnChange: true,
      initialValues: {
        codigoInterno: formRegister?.codigoInterno,
        cnpj: formRegister?.cnpj,
        razaoSocial: formRegister?.razaoSocial,
        nomeFantasia: formRegister?.nomeFantasia,
        inscricaoMunicipal: formRegister?.inscricaoMunicipal,
        inscricaoEstadual: formRegister?.inscricaoEstadual,
        telefoneFixo: formRegister?.telefoneFixo,
        celular: formRegister?.celular,
        emailComercial: formRegister?.emailComercial,
        siteDaEmpresa: formRegister?.siteEmpresa,
        cep: formRegister?.cep,
        rua: formRegister?.rua,
        numero: formRegister?.numero,
        bairro: formRegister?.bairro,
        complemento: formRegister?.complemento,
        estado: formRegister?.estado,
        cidade: formRegister?.cidade,
        nomeDoResponsavel: formRegister?.nomeResponsavel,
        cargoResponsavel: formRegister?.cargoResponsavel,
        contatoResponsavel: formRegister?.contatoResponsavel,
        email: formRegister?.emailResponsavel,
        irrf: formRegister?.irrfPercentual,
        pis: formRegister?.pisPercentual,
        cofins: formRegister?.cofinsPercentual,
        csll: formRegister?.csllPercentual,
        iss: formRegister?.issPercentual,
        ibs: formRegister?.ibsPercentual,
        cbs: formRegister?.cbsPercentual,
        reterISS: formRegister?.reterIss,
        reterIR: formRegister?.reterIr,
        reterPCC: formRegister?.reterPcc,
        reterIBS: formRegister?.reterIbs,
        reterCBS: formRegister?.reterCbs,
        optantePeloSimples: formRegister?.optanteSimplesNacional,
        financeiro: formRegister?.contasBancarias.map((item) => {
          return {
            bancoId: item?.banco?.id,
            codigoBanco: item?.banco?.codigo,
            banco: item?.banco?.nome,
            tipoDeConta:
              item.tipo_conta === 'corrente'
                ? {
                    id: 'corrente',
                    label: 'CORRENTE',
                  }
                : {
                    id: 'poupanca',
                    label: 'POUPANÇA',
                  },
            agencia: item.agencia,
            digitoAgencia: item.digito_agencia,
            conta: item.numero_conta,
            digitoConta: item.digito_conta,
          }
        }),

        formaDePagamento: payments[formRegister?.formaPagamento],
      },
      onSubmit: async (values) => {
        setLoading(true)
        const payload = {
          tipoEmpresa: 'TELEMEDICINA', // "CONVENIOS", LABORATORIO_APOIO", "TELEMEDICINA", "FORNECEDORES", "PRESTADORES_SERVICOS"
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
          estado: values.estado,
          cidade: values.cidade,
          nomeResponsavel: values.nomeDoResponsavel,
          cargoResponsavel: values.cargoResponsavel,
          contatoResponsavel: values.contatoResponsavel,
          emailResponsavel: values.email,
          irrfPercentual: Number(values.irrf) || 0,
          pisPercentual: Number(values.pis) || 0,
          cofinsPercentual: Number(values.cofins) || 0,
          csllPercentual: Number(values.csll) || 0,
          issPercentual: Number(values.iss) || 0,
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
          const responseCreateEnterprise = await UpdateEnterprise(
            formRegister.id,
            payload,
          )

          if (responseCreateEnterprise.success) {
            onClose(true)
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
      informacoesGerais: (
        <InformacoesGerais formik={formik} activeBanks={activeBanks} />
      ),
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
            INTEGRAÇÃO
          </button>
          <button
            type="button"
            onClick={() => setTab('vincularExames')}
            className={`${Outfit400.className} ${tab === 'vincularExames' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
          >
            VINCULAR EXAMES
          </button>
        </div>
        {steps[tab]}
      </div>
    )
  },
)

Telemedicina.displayName = 'ChildComponentPatiente'

export default Telemedicina
