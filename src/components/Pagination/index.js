import { Outfit400 } from '@/fonts'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs'
import { useMemo } from 'react'

const Pagination = ({
  totalRecords,
  recordsPerPage = 10, // Default to 10 records per page
  onPageChange, // Função para chamar quando a página muda (essencial para o pai)
  currentPage, // Recebe a página atual diretamente como prop (sem 'initialCurrentPage')
}) => {
  // O currentPage agora é uma prop, e é o valor que o componente pai está nos dando.

  // Calcula o total de páginas com base no total de registros e registros por página
  const totalPages = useMemo(() => {
    return Math.ceil(totalRecords / recordsPerPage)
  }, [totalRecords, recordsPerPage])

  // Gera um array com os números das páginas a serem renderizados
  const pageNumbers = useMemo(() => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
    return pages
  }, [totalPages])

  // Esta função agora simplesmente notifica o componente pai
  const handlePageClick = (pageNumber) => {
    // Garante que a página clicada é válida
    if (pageNumber > 0 && pageNumber <= totalPages) {
      // Chama a função onPageChange passada pelo pai
      // O componente pai será responsável por atualizar seu próprio estado 'currentPage'
      // e, por sua vez, passará a nova página para este componente via props.
      if (onPageChange) {
        onPageChange(pageNumber)
      }
    }
  }

  const handlePrevious = () => {
    handlePageClick(currentPage - 1)
  }

  const handleNext = () => {
    handlePageClick(currentPage + 1)
  }

  // Não renderiza a paginação se houver apenas uma página ou nenhum registro
  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-2"
      >
        <ArrowLeft2 color={currentPage === 1 ? '#B0B0B0' : '#383838'} />
      </button>

      {pageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[8px] hover:border hover:border-[#00A59D] ${currentPage === pageNumber ? 'bg-[#E0FFF9]' : ''}`}
        >
          <span
            className={`text-[14px] ${Outfit400.className} ${currentPage === pageNumber ? 'text-[#0F9B7F]' : 'text-[#8c8c8c]'}`}
          >
            {String(pageNumber).padStart(2, '0')}
          </span>
        </div>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2"
      >
        <ArrowRight2
          color={currentPage === totalPages ? '#B0B0B0' : '#383838'}
        />
      </button>
    </div>
  )
}

export default Pagination
