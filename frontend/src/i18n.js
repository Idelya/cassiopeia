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
            buy: "Buy",
            continue: "Continue"
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
          delete: "Usuń",
          continue: "Kontynuuj",
          search: "Wyszukaj",
          add: "Dodaj",
          password: "Hasło",
          login: "Zaloguj się",
          back: "Cofnij",
          price: "Cena",
          start: "Początek",
          end: "Koniec",
          generate: "Generuj",
          views: "Wyświetlono",
          admin: {
            title: "Użytkownicy",
            blockDialog: {
              title: "Zablokuj użytkownika",
              text: "Podaj czytelny dla użytkownika powód blokady. Zostanie on wysłany do użytkownika",
              reasonText: "Powód blokady",
              submit: "Zablokuj",
            },
            userList: {
              id: "Lp.",
              username: "Nazwa użytkownika",
              nameAndSurname: "Nazwisko i imię",
              email: "Email",
              ban: "Zablokuj",
              unban: "Odblokuj"
            }
          },
          basket: {
            basket: "Koszyk",
            clearBasket: "Wyszyść koszyk",
            backToSearch: "Wróć do wyszukiwarki",
            buyProducts: "Kup produkty",
            deliveryAdresText: "Podaj adres dostawy",
            streetAndNumber: "Ulica i numer",
            city: "Miasto",
            postalCode: "Kod pocztowy",
            buy: "Kup",
            continue: "Kontynuuj"
          },
          offer: {
            deleteConfirm: "Czy na pewno chcesz usunąć tę ofertę?",
            description: "Opis",
            missingPictures: "Brak zdjęć w galerii",
            deliveryMethods: "Metody Dostawy",
            addToBasket: "Dodaj do koszyka",
            productName: "Nazwa produktu",
            deleteOffer: "Usuń oferte",
            saveChanges: "Zapisz zmiany",
            myoffers: "Twoje oferty",
            setAsMainPicture: "Oznacz jako główne zdjęcie"
          },
          reports: {
            title: "Analityka",
            reportTitle1: "Sprzedane produkty",
            reportTitle2: "Najpopularniejsze metody dostawy",
            reportDesc1: "Raport listujący sprzedane produkty z podziałem na miasta z danego okresu czasu. Można z niego odczytać nazwę produktu, miasto adresu wysyłki, metodę dostawy, cene produktu i koszt dostawy.",
            reportDesc2: "Raport najchętniej wybieranych metod dostawy wraz zagregowanymi wartościami sprzedanych produktów w każdym mieście. Można z niego odczytać miasto adresu wysyłki, metodę dostawy i sumaryczną ilość i wartość produktów dla danego miasta i metody dostawy."
          },
          seller: {
            myoffers: "Twoje Oferty",
            addOffer: "Dodaj ofertę",
            seeReports: "Zobacz raporty sprzedaży",
            onlyActualOffers: "Zobacz tylko aktualne oferty",
          }
        }
      }
    }
  });

export default i18n;