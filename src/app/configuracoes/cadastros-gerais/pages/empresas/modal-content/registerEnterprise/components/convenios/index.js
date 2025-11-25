import SuccessRegister from '@/components/Alerts/SuccessRegister'
import ModalFramer from '@/components/ModalFramer'
import { Outfit400 } from '@/fonts'
import {
  CreateEnterprise,
  SearchCadastroPaciente,
  SearchOrdemDeServico,
  SearchTiss,
  UpdateConvenio,
} from '@/helpers'
import { percentBRToNumber } from '@/utils'
import { useFormik } from 'formik'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { toast } from 'react-toastify'
import { validationSchemaEnterprises } from '../schemas'

import Atendimento from './components/atendimento'
import InformacoesEspecificas from './components/informacoesEspecificas'
import InformacoesGerais from './components/informacoesGerais'
import Instrucoes from './components/instrucoes'
import Integracao from './components/integracao'
import Planos from './components/planos'
import Restricoes from './components/restricoes'

const Convenios = forwardRef(
  (
    {
      formRegister,
      states,
      fields,
      onClose,
      onValidationChange,
      setLoading,
      findData,
    },
    ref,
  ) => {
    const [tab, setTab] = useState('informacoesGerais')
    const [openModalAlerts, setOpenModalAlerts] = useState(false)

    const [cadPacientesOpcionais, setCadPacientesOpcionais] = useState([])

    const [cadPacientesObrigatorio, setCadPacientesObrigatorio] = useState([])

    const [cadOrdemServicoOpcionais, setCadOrdemServicoOpcionais] = useState([])

    const [cadOrdemServicoObrigatorio, setCadOrdemServicoObrigatorio] =
      useState([])

    const [cadTissOpcionais, setCadTissOpcionais] = useState([])

    const [cadTissObrigatorios, setCadTissObrigatorios] = useState([])

    useEffect(() => {
      const findUsersByFilters = async () => {
        try {
          const [optCadastroPaciente, optOrdemDeServico, optTiss] =
            await Promise.all([
              SearchCadastroPaciente(),
              SearchOrdemDeServico(),
              SearchTiss(),
            ])

          setCadPacientesOpcionais(optCadastroPaciente.data)
          setCadOrdemServicoOpcionais(optOrdemDeServico.data)
          setCadTissOpcionais(optTiss.data)
        } catch (error) {
          console.error(error)
        }
      }

      findUsersByFilters()
    }, [])

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
        nomeConvenio: '',
        registroAns: '',
        matricula: '',
        tipoConvenio: {},
        formaLiquidacao: {},
        valorCH: '',
        valorFilme: '',
        diaVencimento: '',
        cnes: '',
        tiss: false,
        versaoTiss: '',
        tissCodigoOperadora: '',
        codigoOperadora: '',
        codigoPrestador: '',
        envio: {},
        faturaAte: {},
        vencimento: '',
        contrato: '',
        ultimoAjuste: '',
        instrucoesParaFaturmento: '',
        tabelaDeServico: {},
        tabelaBase: {},
        tabelaMaterial: {},
        coParticipacao: false,
        notaFiscalfatura: false,
        contato: '',
        instrucoes: '',
        observacoes: '',
      },
      onSubmit: async (values) => {
        setLoading(true)
        const payload = {
          tipoEmpresa: 'CONVENIOS', // "CONVENIOS", LABORATORIO_APOIO", "TELEMEDICINA", "FORNECEDORES", "PRESTADORES_SERVICOS"
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
          irrfPercentual: percentBRToNumber(values.irrf),
          pisPercentual: percentBRToNumber(values.pis),
          cofinsPercentual: percentBRToNumber(values.cofins),
          csllPercentual: percentBRToNumber(values.csll),
          issPercentual: percentBRToNumber(values.iss),
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
            // fazer o update mandando as outras informações específicas

            const payloadUpdate = {
              nome: values.nomeConvenio,
              registro_ans: values.registroAns,
              matricula: values.matricula,
              tipo_convenio_id: values.tipoConvenio.id,
              forma_liquidacao_id: values.formaLiquidacao.id,
              valor_ch: values.valorCH,
              valor_filme: values.valorFilme,
              tiss: values.tiss,
              versao_tiss: values.versaoTiss,
              codigo_operadora_tiss: values.tissCodigoOperadora,
              codigo_operadora_autorizacao: values.codigoOperadora,
              codigo_prestador: values.codigoPrestador,
              envio_faturamento_id: values.envio.id,
              fatura_ate_dia: values.faturaAte,
              dia_vencimento: values.diaVencimento,
              data_contrato: values.contrato,
              data_ultimo_ajuste: values.ultimoAjuste,
              instrucoes_faturamento: values.instrucoesParaFaturmento,
              tabela_servico_id: values.tabelaDeServico.id,
              tabela_base_id: values.tabelaBase.id,
              tabela_material_id: values.tabelaMaterial.id,
              cnes: values.cnes,
              co_participacao: true,
              nota_fiscal_exige_fatura: true,
              contato: values.contato,
              instrucoes: values.instrucoes,
              observacoes_gerais: values.observacoes,
              ativo: true,
            }

            await UpdateConvenio(payloadUpdate)

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
      informacoesEspecificas: (
        <InformacoesEspecificas formik={formik} fields={fields} />
      ),
      integracao: <Integracao formik={formik} />,
      atendimento: (
        <Atendimento
          formik={formik}
          cadPacientesOpcionais={cadPacientesOpcionais}
          setCadPacientesOpcionais={(e) => setCadPacientesOpcionais(e)}
          cadPacientesObrigatorio={cadPacientesObrigatorio}
          setCadPacientesObrigatorio={(e) => setCadPacientesObrigatorio(e)}
          cadOrdemServicoOpcionais={cadOrdemServicoOpcionais}
          setCadOrdemServicoOpcionais={(e) => setCadOrdemServicoOpcionais(e)}
          cadOrdemServicoObrigatorio={cadOrdemServicoObrigatorio}
          setCadOrdemServicoObrigatorio={(e) =>
            setCadOrdemServicoObrigatorio(e)
          }
          cadTissOpcionais={cadTissOpcionais}
          setCadTissOpcionais={(e) => setCadTissOpcionais(e)}
          cadTissObrigatorios={cadTissObrigatorios}
          setCadTissObrigatorios={(e) => setCadTissObrigatorios(e)}
        />
      ),
      restricoes: <Restricoes formik={formik} />,
      planos: <Planos formik={formik} />,
      instrucoes: <Instrucoes formik={formik} />,
    }

    return (
      <div className="mx-[48px] my-7 flex h-fit flex-1 flex-col rounded">
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
          <button
            type="button"
            onClick={() => setTab('integracao')}
            className={`${Outfit400.className} ${tab === 'integracao' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
          >
            INTEGRAÇÃO
          </button>
          <button
            type="button"
            onClick={() => setTab('atendimento')}
            className={`${Outfit400.className} ${tab === 'atendimento' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
          >
            ATENDIMENTO
          </button>
          <button
            type="button"
            onClick={() => setTab('restricoes')}
            className={`${Outfit400.className} ${tab === 'restricoes' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
          >
            RESTRIÇÕES
          </button>
          <button
            type="button"
            onClick={() => setTab('planos')}
            className={`${Outfit400.className} ${tab === 'planos' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
          >
            PLANOS
          </button>
          <button
            type="button"
            onClick={() => setTab('instrucoes')}
            className={`${Outfit400.className} ${tab === 'instrucoes' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
          >
            INSTRUÇÕES
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

Convenios.displayName = 'ChildComponentPatiente'

export default Convenios
