import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Modal from "react-modal";

const certifications = [
  {
    title: "React Js",
    authority: "NXTWAVE ACADEMY",
    date: "oct 2024",
    image:"https://media-hosting.imagekit.io//0c8d671fa29e4322/Screenshot%202025-02-14%20100705.png?Expires=1834115898&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nx-fh9A8bjbJ1VRvYf1Rfw~UCRRY~YKHWLasxlnZIykbA4Q7YeMlIGfYhaUo53x-hDNOac8If50bc9C9WIDwqDY5IWbQURfpnNJc-zcWRmPl6oRXPMJ3ZuwaRp7PFeRxIF2OLSXTUWplSRcWu1Yd7HPz7vVdt0f3WNURVelJi2-Gs59Nq2mvOfMP2tWY1hxZHA2cSSdyh~gFOF~UxUhgtVicelVdBj35MluDSjsC1gk45ai-gRrmupD8f4grLx7TpuA1UZtLKgrK9AIKZ9N5lK5dQw6FbleRNC3ZuOZyO~hHi3q1hazgSftwGVT552YLvUi2NbZ-E4Ct4zYK3um7iQ__",
  },
  {
    title: "Node Js",
    authority: "NXTWAVE ACADEMY",
    date: "June 2024",
    image: "https://media-hosting.imagekit.io//b6af9367bac7463f/Screenshot%202025-02-14%20100953.png?Expires=1834116376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QYw~CHSC-t-JotnPIuemxD1WvgwqD6cdHLcqcz9xeZ~EmixJmpxpJN1SRREZ9zbwlWdYZ1ajGBWgNSFlgK1uAjRDDrketRgH6c7w2S2IBx1AC2qjfIOe3-ogyx42FCEiSyMm9039G4tyEOed7sPNmlWY1uksy1j4q7sGhwoRhvxXJxiG1xQ3lcoKRd6BQIY8QOAtuI0Tjsf6vflKy1Ak9VqDsps-KTYxHJHX1K7kUIHuCnpgdKzehaVDgLF3pvbpGAFBpVMULNNfxCgvVl0yjVXS3XixcTtk0a30T2BZOjej~VNJdYDocG4IeFOWt~h547O0nEE~RoQAqUgEb7ab1Q__",
  },
  {
    title: "Introduction to Databases",
    authority: "NXTWAVE ACADEMY",
    date: "Mar 2024",
    image: "https://media-hosting.imagekit.io//8f4122d144744edf/Screenshot%202025-02-14%20101030.png?Expires=1834116415&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vZDT5jDJIr0qaERgiBzEVn7pQcmjPDjJ6oGrvC3XS6FcqZZhf952fgy9NcFP1z7jy8aL1Q7fH-BB0D~3p6idR9SvLrTdUglghiff4s-NnPcmsZGqBNTo7V6gYgIqmuAs4nyd7XohDeSi2mxOFOVCpzS1O3kkskWXOr4CTOZKA9-19YuuTuRu8j9rhUs2gueDR1I1kq0XorJaHXqQ84J-rd1RBUbOg~zC5vzfpDFrNLUUHEpjgkBy5Vxx7diG4Dj0muWv1TNU8pim8uO3-UvzZflIecDaIpkQqtfxPua4fTh0iHvGvn52DeRqa8jxjiKEr0NJXm5wb-RlmmcDnMbIHg__",
  },
  {
    title: "Build Your Own Dynamic Web Application",
    authority: "NXTWAVE ACADEMY",
    date: "Jan 2024",
    image: "https://media-hosting.imagekit.io//ee260b25b2bc4a6c/Screenshot%202025-02-14%20101049.png?Expires=1834116456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w4KPtJMHkEr9ETxtADrU2ZM1GJSSIFLPDBAM9lSvjoC5theVTOFcvMTvd96PhBm4yFMmWR~wp2Q4pEwYIPb~Bu292ULCH94nj73kFVoosHIzodS5Vdn7tnIEd0l~XmPzm54M6cF9EncwUIkVz8Xi1j1RBQqL4uN-5FST3Mw0yDQb8Hnj0mEoE5mocnbpea3iS4jUed~cT8OCgRyz7nXMNg9~4Zn5WsR0snvQoMSnRs9XgZjhrBe1O~3ebYInEL2nyBB6CeRSYFk4LZdZlPhi00euNs1o5eqgel7RLsFtDQQXdW7iNf6l7MElGm5t35ta3ThiVQMFqNMQGF6MxhhRPg__",
  },
  {
    title: "Programming Foundations With Python ",
    authority: "NXTWAVE ACADEMY",
    date: "Sep 2023",
    image: "https://media-hosting.imagekit.io//1cb0e67a80d642e0/Screenshot%202025-02-14%20101109.png?Expires=1834116514&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=elVUEIq-iIU9iU5CNozZE36OsRDeDned2ETtVaEsTkX~p2Ej2kI9xm4809u8urAn7ykf0xn6Kwk2cTkQbN7CPTo41t9EDWhr95W9WjbyoaieT9FSBM9qJ0tDm7cRFDo~YCSA7jBq3~dvkVsYsty~7gmSuHeOl3NRME2H189jKxm85eNE4finpu05ilO8v7-lexusxVjrSTA8R0994s1MZUUuYNnquxyzTBoPA9T909yMnj4wonkVcLvS~LHhZzSB76sE9xIDSRLdQsKhGGkUZPOglKLE0y-BJv2J~TvvdRhvbJoXMg0MDNQJEmCG2FPuhsgVdNaM2pQZ4MB0kGLncQ__",
  },
  {
    title: "Build Your Own Responsive Website",
    authority: "NXTWAVE ACADEMY",
    date: "May 2023",
    image: "https://media-hosting.imagekit.io//2c45bd3458624d62/Screenshot%202025-02-14%20101123.png?Expires=1834116542&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CFPcqDS1P84ZoL~Yb8cWjO5aqeBbmLdg1tGVBJTgVJVm-1s6x2t14naQY3Ow6gAcmrNxnUR0DtmzO3UWKaiI5ePHJ5RXRaMffaZWau0VEDYyt1L1sUvVc~RcT0YwHUnl7gyMtUhp~JR~HlOyb1cAV1bZEKYKwbMR5x--N9rbzjwEgyP74VacOzknZ5Q8NQ0hsyZgK4B6Loa300IXi7EUu2tdUqzmVzjY61DasfA5POMleCSx8EpQUCIAKHibJuEV5D~PppqWOe~wbCE2OQn0-U6gOFj8hv3fkpjpPvnYcwDi06AWOpx3lF6XxjYwn~djsh81l10kGs0pck4uWtadQg__",
  },
  {
    title: "Build Your Own Static Website",
    authority: "NXTWAVE ACADEMY",
    date: "Jan 2023",
    image: "https://media-hosting.imagekit.io//c83f8476ad3f4813/Screenshot%202025-02-14%20101251.png?Expires=1834116577&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yO0en7ocgkaWe2P733F~-0y5B~yJPVT74fOoO1zB943bkKAbj4X9nnWnmkC8A0xUChkPaPfdnre~y3ljFKALTIopymUlhwK7naihoUDhGulmS1AMZE1VWvYwAT2I2-Bzvmss~MOLZ7mzZZCHaXl94eojw8Di82slFMgkQo3aD1Bl80fGPQS0vpKwDuW~VoRmACqHu2cBGe-LoGJpEB-M2DjhkIvVgc87zDJ3a-taHjCy~5BBVRYN6rMWXGOgQ9NyOgCdBREzZCcQOXLoz0VwYiuMs5xaKYIlKclNrobWuzjjlvrMySYpOiPnAvTwRLvQjkZB1UNnCmusKH~ABKuCRw__",
  },
  {
    title: "JavaScript Essentials",
    authority: "NXTWAVE ACADEMY",
    date: "Nov 2022",
    image: "https://media-hosting.imagekit.io//5c932d5399664c4b/Screenshot%202025-02-14%20101354.png?Expires=1834116615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TGvt4weN~3jsiCy-FqYu5mBKDePP5gBamV~vDEwLdFr2j11ak2uRyr8ihbDivsf1-A~wdpO6Nn-J751URi2xkuYAKd2owRO0JLsY6AtsBR8vWzpwYRFZDHOlMHrp3nfjg9TfBBUNL5zQNawRnOgUILtm35g6pLNCkFeuzCYMheZeKjKSMLKk06xiBdxmNMT0s2KFTLBkMKTkqpJyLeNko5yY6JmPE3UwOG9jkdxGs7kVdDKlhwfY4V2iuKQiBzXMEHJkVehLYsn~JhZx-NQxjby8sBRVIL~4xk0Xs6XZegYc3rnNQ92GIy9lVmmJ~WuGNt866i~C9bxmW8fyzo1nvg__",
  },
  {
    title: "UI/UX Mega Workshop (participation certificate)",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2024",
    image: "http://cdn1.ccbp.in/misc/uiux_participation_cert_acad/VHEWCYG4XS.png",
  },
  {
    title: "UI/UX Mega Workshop",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2024",
    image: "https://cdn1.ccbp.in/misc/uiux_completion_cert_academy/4ZEAFNR5SN.png",
  },
  {
    title: "GEN AI Mega Workshop (participation certificate)",
    authority: "NXTWAVE ACADEMY",
    date: "Aug 2023",
    image: "https://media-hosting.imagekit.io//b4c7fd1ec31648ac/Screenshot%202025-02-14%20102524.png?Expires=1834117012&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rNGosbtFukAjg2yKMohNbRTu8en7hZpK8pW9QNuyweXfjknDUWZAYeG2ucznDCc7ajUfHGIafB9LRJdA9VEDKBBcn1WjE~hScfFNo0CTXtlQLpvCNL9wsXgUvaaLa8D2dqZR-s~7-w~tBQTlnsdAYbgteonYwA1DF7Mx2UJWeIoCEaWNYQ025GoNzj19deifj2vuvG0lApKv49NSBJOhJz039REwbkYHmCf~ed1d-ean7AEqwDdoIb1WFkdmmNQzxFlnkeS~bqUCAWmNx93UCFGRxYX8aR4cgiLY88p9-Nf-S4MhBph14WE9Pqs76p3ZupP5F7HCgiw2NLyr04q1XA__",
  },
  {
    title: "GEN AI Mega Workshop",
    authority: "NXTWAVE ACADEMY",
    date: "Aug 2023",
    image: "https://media-hosting.imagekit.io//a0b240f07a1b4e83/Screenshot%202025-02-14%20102508.png?Expires=1834116938&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=C6sxB3MCzV8oIRqAnhMTJ04MMep~a7hGCIJRiXLZCcVpM16qUuLOmVVm~Q~GRUaKgEcJnts6ZMXWpPw~BQEEbg8-3r5yrXqYjykDF3NOumWsnCP0GdNJVlNBTja0kpW6olK~QI2qRzjOUGwSqBhLqnOWJDRYy6ZDPzpOo-qdEG59RYQidrxEqlEGFAZfPq4abuEAcGsm1H4DvEc9cJj96nAptIjcHuqWDXqSpf~tDWfOwYRrRaZ1pO5Vfrsba3vkrzxKrFGlo4jluN6ustXhCEbhv-brnG0qZDBRwjjova7p9p2GqejZFgtaWgTXCfqzV51XGiOQFbj1Sbwx~vO3xg__",
  }
];

Modal.setAppElement("#root");

const Certifications = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const controls = useAnimation();

  // Function to start infinite back-to-back scrolling
  const startScrolling = () => {
    controls.start({
      x: ["0%", "-100%"], // Move left
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,// Adjust speed here
        ease: "linear",
      },
    });
  };

  // Stop scrolling when modal opens
  const stopScrolling = () => {
    controls.stop();
  };

  // Open modal and stop scrolling
  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalIsOpen(true);
    stopScrolling();
  };

  // Close modal and restart scrolling after it fully closes
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!modalIsOpen) {
      const timer = setTimeout(() => {
        startScrolling();
      }, 300); // Delay before restarting scroll
      return () => clearTimeout(timer);
    }
  }, [modalIsOpen]);

  return (
    <section className="py-20 bg-black text-white relative">
      <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

      {/* Scrolling Wrapper */}
      <div className="overflow-hidden relative w-full">
        <motion.div className="flex space-x-6 min-w-max" animate={controls}>
          {[...certifications, ...certifications].map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-4 min-w-[300px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(cert)}
            >
              <img src={cert.image} alt={cert.title} className="rounded-md w-full h-40 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.authority}</p>
              <p className="text-xs text-gray-500">Issued: {cert.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Full-Screen Certificate View */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90"
        overlayClassName="fixed inset-0 bg-black bg-opacity-90"
      >
        {selectedCert && (
          <div className="p-4 bg-transparent max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedCert.title}</h2>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-auto max-h-[80vh] mx-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certifications;