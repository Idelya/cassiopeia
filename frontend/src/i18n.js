import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          cancel: "Cancel",
          delete: "Delete",
          continue: "Continue",
          search: "Search",
          add: "Add",
          password: "Password",
          login: "Login",
          back: "Back",
          price: "Price",
          start: "Start",
          end: "End",
          generate: "Generate",
          views: "Views",
          admin: {
            title: "Users",
            blockDialog: {
              title: "Block user",
              text: "Input reason of banning the account. This communicate will be sent to a user",
              reasonText: "Ban reason",
              submit: "Ban",
            },
            userList: {
              id: "Id",
              username: "Username",
              nameAndSurname: "Surname and name",
              email: "Email",
              ban: "Ban",
              unban: "Unban"
            }
          },
          basket: {
            basket: "Basket",
            clearBasket: "Clear basket",
            backToSearch: "Back to search",
            buyProducts: "Buy products",
            deliveryAdressText: "Input delivery adress",
            streetAndNumber: "Street and number",
            city: "City",
            postalCode: "Postal code",
            buy: "Buy"
          },
          offer: {
            deleteConfirm: "Do you really want to delete this offer?",
            description: "Description",
            missingPictures: "No pictures in gallery",
            deliveryMethods: "Delivery methods",
            addToBasket: "Add to basket",
            productName: "Product name",
            deleteOffer: "Delete offer",
            saveChanges: "Save changes",
            myoffers: "My offers",
            setAsMainPicture: "Set as main picture"
          },
          reports: {
            title: "Reports",
            reportTitle1: "Sold products",
            reportTitle2: "Most popular delivery methods",
            reportDesc1: "A report listing sold products by city from a given time period. It contains the name of the product, the city of the shipping address, the method of delivery, the price of the product and the cost of delivery.",
            reportDesc2: "Report of the most popular delivery methods with aggregated values of products sold in each city. It contains the city of the shipping address, the method of delivery and the total quantity and value of products for a given city and method of delivery."
          },
          seller: {
            myoffers: "My offers",
            addOffer: "Add offer",
            seeReports: "See sale reports",
            onlyActualOffers: "View only actual offers",
          }
        }
      },
      pl: {
        translation: {
          cancel: "Anuluj",
          delete: "Usu??",
          continue: "Kontynuuj",
          search: "Wyszukaj",
          add: "Dodaj",
          password: "Has??o",
          login: "Zaloguj si??",
          back: "Cofnij",
          price: "Cena",
          start: "Pocz??tek",
          end: "Koniec",
          generate: "Generuj",
          views: "Wy??wietlono",
          admin: {
            title: "U??ytkownicy",
            blockDialog: {
              title: "Zablokuj u??ytkownika",
              text: "Podaj czytelny dla u??ytkownika pow??d blokady. Zostanie on wys??any do u??ytkownika",
              reasonText: "Pow??d blokady",
              submit: "Zablokuj",
            },
            userList: {
              id: "Lp.",
              username: "Nazwa u??ytkownika",
              nameAndSurname: "Nazwisko i imi??",
              email: "Email",
              ban: "Zablokuj",
              unban: "Odblokuj"
            }
          },
          basket: {
            basket: "Koszyk",
            clearBasket: "Wyszy???? koszyk",
            backToSearch: "Wr???? do wyszukiwarki",
            buyProducts: "Kup produkty",
            deliveryAdresText: "Podaj adres dostawy",
            streetAndNumber: "Ulica i numer",
            city: "Miasto",
            postalCode: "Kod pocztowy",
            buy: "Kup"
          },
          offer: {
            deleteConfirm: "Czy na pewno chcesz usun???? t?? ofert???",
            description: "Opis",
            missingPictures: "Brak zdj???? w galerii",
            deliveryMethods: "Metody Dostawy",
            addToBasket: "Dodaj do koszyka",
            productName: "Nazwa produktu",
            deleteOffer: "Usu?? oferte",
            saveChanges: "Zapisz zmiany",
            myoffers: "Twoje oferty",
            setAsMainPicture: "Oznacz jako g????wne zdj??cie"
          },
          reports: {
            title: "Analityka",
            reportTitle1: "Sprzedane produkty",
            reportTitle2: "Najpopularniejsze metody dostawy",
            reportDesc1: "Raport listuj??cy sprzedane produkty z podzia??em na miasta z danego okresu czasu. Mo??na z niego odczyta?? nazw?? produktu, miasto adresu wysy??ki, metod?? dostawy, cene produktu i koszt dostawy.",
            reportDesc2: "Raport najch??tniej wybieranych metod dostawy wraz zagregowanymi warto??ciami sprzedanych produkt??w w ka??dym mie??cie. Mo??na z niego odczyta?? miasto adresu wysy??ki, metod?? dostawy i sumaryczn?? ilo???? i warto???? produkt??w dla danego miasta i metody dostawy."
          },
          seller: {
            myoffers: "Twoje Oferty",
            addOffer: "Dodaj ofert??",
            seeReports: "Zobacz raporty sprzeda??y",
            onlyActualOffers: "Zobacz tylko aktualne oferty",
          }
        }
      }
    }
  });

export default i18n;