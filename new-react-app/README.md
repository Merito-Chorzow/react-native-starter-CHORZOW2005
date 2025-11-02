Aplikacja React z wykorzystaniem GPS

Aplikacja stworzona w React może pobrać bieżącą lokalizację użytkownika — czyli jego szerokość i długość geograficzną. Wykorzystuje do tego wbudowane API Geolocation, które uzyskuje dostęp do usług lokalizacyjnych systemu operacyjnego przez przeglądarkę (zarówno na komputerze, jak i urządzeniu mobilnym).

Jak to działa

Sprawdzenie dostępności geolokalizacji
Na początku aplikacja weryfikuje, czy przeglądarka obsługuje funkcję geolokalizacji.
Jeśli nie, użytkownik otrzymuje komunikat:
„Geolokalizacja nie jest dostępna w tej przeglądarce.”

Weryfikacja uprawnień
Aby uzyskać dane o lokalizacji, przeglądarka musi mieć zgodę użytkownika.
Po wywołaniu navigator.geolocation.getCurrentPosition() pojawia się pytanie:
„Czy chcesz zezwolić tej stronie na dostęp do Twojej lokalizacji?”
W przypadku odmowy aplikacja wyświetla odpowiedni komunikat o błędzie.

Pobieranie współrzędnych
Po udzieleniu zgody przeglądarka zwraca dwie wartości:

szerokość geograficzną (latitude)

długość geograficzną (longitude)
Otrzymane dane zapisywane są w stanie komponentu React (za pomocą useState) i następnie prezentowane użytkownikowi.

Przykład wyświetlanych danych:
Szerokość: 50.06143
Długość: 19.93658

Testowanie i implementacja logiki
Do działania funkcji wystarczy zwykły JavaScript — nie ma potrzeby instalowania dodatkowych bibliotek.

Przykładowy kod:

navigator.geolocation.getCurrentPosition(
  (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  },
  (error) => {
    alert('Nie udało się pobrać lokalizacji: ' + error.message);
  }
);


Uruchamianie w przeglądarce
Po kliknięciu przycisku „Pobierz lokalizację” aplikacja poprosi użytkownika o pozwolenie, a następnie wyświetli jego aktualne współrzędne geograficzne. 