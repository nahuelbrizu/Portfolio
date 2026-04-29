import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfES from "../../Assets/CV_Nahuel_Brizuela_IT.pdf";
import pdfEN from "../../Assets/CV_Nahuel_Brizuela_IT_English.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";

// Use CDN for the worker and styles to avoid issues with Webpack and GitHub pages subdirectories
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Import styles from CDN since local imports were failing
const annotationStyles = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf_viewer.min.css`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const { t, i18n } = useTranslation();

  // Determine which PDF to use based on the current language
  const currentPdf = i18n.language && i18n.language.startsWith('es') ? pdfES : pdfEN;

  useEffect(() => {
    // Add the CSS link to the document head
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = annotationStyles;
    document.head.appendChild(link);
    
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      document.head.removeChild(link);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Improve dynamic scaling based on window size
  const pdfScale = width > 1200 ? 1.7 : width > 992 ? 1.4 : width > 768 ? 1.1 : width > 500 ? 0.8 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={currentPdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t('resume.download')}
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", width: "100%", margin: "0", overflowX: "hidden" }}>
          <Document 
            file={currentPdf} 
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            className="d-flex flex-column align-items-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}_${i18n.language}`} 
                pageNumber={index + 1} 
                scale={pdfScale} 
                className="mb-4"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={currentPdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t('resume.download')}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
