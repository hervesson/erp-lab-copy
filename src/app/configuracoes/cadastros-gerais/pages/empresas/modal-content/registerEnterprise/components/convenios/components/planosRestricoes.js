import CustomSelect from '@/components/CustomSelect'
import Divider from '@/components/Divider'
import { Outfit400 } from '@/fonts'

const PlanoRestricoes = ({ formik }) => {
  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      {/* Configuração */}

      <div className="flex rounded border border-[#E7E7E7] p-6 shadow-xl">
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-4">
            <p className={`${Outfit400.className} text-[14px] text-[#0F9B7F]`}>
              Plano 1{' '}
            </p>
            <div className="flex flex-1 gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Nome do plano
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('codigoInterno')}
                  type="text"
                  id="codigoInterno"
                  name="codigoInterno"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o codigo interno"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Tabela de preços
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('cnpj')}
                  value={formik.values.cnpj}
                  type="text"
                  id="cnpj"
                  name="cnpj"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o CNPJ"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Valor CH<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('razaoSocial')}
                  type="text"
                  id="razaoSocial"
                  name="razaoSocial"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite a Razão Social"
                  maxLength={18}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Valor filme
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('nomeFantasia')}
                  type="text"
                  id="nomeFantasia"
                  name="nomeFantasia"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o nome fantasia"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex gap-4">
                  <div className="flex flex-1 flex-col gap-1">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[#222222]`}
                    >
                      Instruções
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <textarea
                      value={formik.values.descricao}
                      onChange={(e) =>
                        formik.setFieldValue('descricao', e.target.value)
                      }
                      className={`${Outfit400.className} ring-none flex items-center justify-center rounded-lg border border-[#A9A9A9] px-2 py-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                      placeholder="Digite as instruções"
                    />
                  </div>
                </div>
              </div>
            </div>

            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Restrições gerais a todos os planos
            </span>
            <div className="flex gap-4">
              <div className="flex flex-1 gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Unidade
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={{}}
                    // setSelect={(e) => setCollectionRegion(e)}
                    options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                    placeholder={'Selecione uma ou mais regioões de coleta'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <button
                    className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                  >
                    ADICIONAR
                  </button>
                </div>
              </div>
              <div className="flex flex-1 gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Seletor
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={{}}
                    // setSelect={(e) => setCollectionRegion(e)}
                    options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                    placeholder={'Selecione uma ou mais regioões de coleta'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <button
                    className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                  >
                    ADICIONAR
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Especialidade
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={{}}
                    // setSelect={(e) => setCollectionRegion(e)}
                    options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                    placeholder={'Selecione uma ou mais regioões de coleta'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <button
                    className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                  >
                    ADICIONAR
                  </button>
                </div>
              </div>
              <div className="flex flex-1 gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Exame
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={{}}
                    // setSelect={(e) => setCollectionRegion(e)}
                    options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                    placeholder={'Selecione uma ou mais regioões de coleta'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <button
                    className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                  >
                    ADICIONAR
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Médico
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={{}}
                // setSelect={(e) => setCollectionRegion(e)}
                options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                placeholder={'Selecione uma ou mais regioões de coleta'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-end gap-1">
        <button
          className={`${Outfit400.className} flex h-10 w-[127px] items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
        >
          NOVO PLANO
        </button>
      </div>

      <Divider />

      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Restrições gerais a todos os planos
        </span>

        <div className="flex gap-4">
          <div className="flex flex-1 gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Unidade
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={{}}
                // setSelect={(e) => setCollectionRegion(e)}
                options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                placeholder={'Selecione uma ou mais regioões de coleta'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-col justify-end gap-1">
              <button
                className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              >
                ADICIONAR
              </button>
            </div>
          </div>
          <div className="flex flex-1 gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Seletor
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={{}}
                // setSelect={(e) => setCollectionRegion(e)}
                options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                placeholder={'Selecione uma ou mais regioões de coleta'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-col justify-end gap-1">
              <button
                className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              >
                ADICIONAR
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Especialidade
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={{}}
                // setSelect={(e) => setCollectionRegion(e)}
                options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                placeholder={'Selecione uma ou mais regioões de coleta'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-col justify-end gap-1">
              <button
                className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              >
                ADICIONAR
              </button>
            </div>
          </div>
          <div className="flex flex-1 gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Exame
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={{}}
                // setSelect={(e) => setCollectionRegion(e)}
                options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                placeholder={'Selecione uma ou mais regioões de coleta'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-col justify-end gap-1">
              <button
                className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              >
                ADICIONAR
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label
            className={`${Outfit400.className} text-[14px] text-[#222222]`}
          >
            Médico
            <strong className="text-[#F23434]">*</strong>
          </label>
          <CustomSelect
            select={{}}
            // setSelect={(e) => setCollectionRegion(e)}
            options={[{ id: 1, label: 'NÃO SE APLICA' }]}
            placeholder={'Selecione uma ou mais regioões de coleta'}
            className={'border border-[#BBBBBB]'}
          />
        </div>
      </div>
    </div>
  )
}

export default PlanoRestricoes
