import { useParams } from "react-router-dom";
import { useSubmitInfo } from "../controllers/controllerSubmitInfo";

const SubmitInfo = () => {
  const { ocoId } = useParams();
  console.log(ocoId);
  const { formData, loading, error, handleChange, handleFileChange, handleSubmit } = useSubmitInfo(Number(ocoId));

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto p-6 bg-white shadow-xl rounded-lg max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Informar sobre o Desaparecido
        </h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-lg text-gray-700 mb-2" htmlFor="informacao">
              Informações sobre a visualização
            </label>
            <input
              type="text"
              name="informacao"
              id="informacao"
              value={formData.informacao}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-lg text-gray-700 mb-2" htmlFor="descricao">
              Descrição do anexo
            </label>
            <textarea
              name="descricao"
              id="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block font-medium text-lg text-gray-700 mb-2" htmlFor="data">
              Data da visualização
            </label>
            <input
              type="date"
              name="data"
              id="data"
              value={formData.data}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-lg text-gray-700 mb-2" htmlFor="foto">
              Foto (se disponível)
            </label>
            <input
              type="file"
              name="foto"
              id="foto"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Informações"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitInfo;
