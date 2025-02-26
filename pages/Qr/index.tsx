import styles from './styles.module.scss';
import QRCode from 'react-qr-code';
import { useState, useContext } from 'react';
import QRCodeLink from 'qrcode';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/AuthContext';
import { canSSRAuth } from '../../utils/canSSRAuth'
import { setupAPIClient } from '../../services/api'

export default function QrCode() {
  const [tableNumber, setTableNumber] = useState('');  // Armazena o número da mesa
  const [qrcodelink, setQrcodeLink] = useState('');
  const { user } = useContext(AuthContext);  // Pega os dados do usuário autenticado
  
  // Função para atualizar o número da mesa e gerar o QR Code
  function handleQrcode(e) {
    setTableNumber(e.target.value);
    handleGenerate(e.target.value);
  }

  // Gera o QR Code com base no número da mesa e o ID da organização
  function handleGenerate(tableNumber) {
    const organizationId = user.organization;  // ID da organização a partir do contexto

    // Cria o objeto JSON com o número da mesa e o ID da organização
    const qrCodeData = JSON.stringify({
      number: tableNumber,
      organizationId: organizationId
    });

    // Gera o QR Code em formato de URL
    QRCodeLink.toDataURL(qrCodeData, {
      width: 600,
      margin: 3,
    }, (err, url) => {
      if (err) {
        console.error("Erro ao gerar QR Code:", err);
        return;
      }
      setQrcodeLink(url);  // Define o URL gerado no estado
    });
  }

  return (
    <Sidebar>
      <Header />
      <div className={styles.container}>
        {/* Renderiza o QR Code com os dados no formato JSON */}
        <QRCode
          value={JSON.stringify({ number: tableNumber, organizationId: user.organization })}
        />

        {/* Input para inserir o número da mesa */}
        <input
          className={styles.input}
          placeholder="Digite o número da mesa"
          value={tableNumber}
          onChange={(e) => handleQrcode(e)}
        />

        {/* Botão para baixar o QR Code, exibido apenas se um número da mesa for inserido */}
        {tableNumber && (
          <a href={qrcodelink} download={`qrcode_${tableNumber}`}>
            Baixar QrCode
          </a>
        )}
      </div>
    </Sidebar>
  );
}
export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
return {
    props: {
      orders: []
    }
  }
})