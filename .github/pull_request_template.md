**Issue #:** [JIRA-1234](https://mohirpool.atlassian.net/browse/IT-1234)

## PR turi

PR'da qanday turdagi o'zgarish bo'lganini belgilang:

[+] Bugfix

- [ ] Feature [+] Kod stilida o'zgarishlar (formatting, renaming)
- [ ] Refactor(funksional yoki api o'zgarishlari yo'q)
- [ ] Boshqa:

## PR ko'lami

Bu PR quyidagi file'larga yangi kod qo'shgan, yoki o'zgartirish kiritgan:

- Yangi - Component Button O'zgartirish - Yo'q

## Screenshots

#### oldingi holati:

---

#### hozirgi holati:

Buttons.jpg  
//screenshots source- .github/Buttons.jpg

## Avvalgi holatni tasvirlang

- Loyihada buttonlarni generic ishlatish uchun button component yo'q edi

## Hozirgi holatni tasvirlang

- Loyihada buttonlarni generic ishlatish uchun yangi button nomli component
  qo'shildi

## Bu PR keskin o'zgarishlar keltirib chiqaradimi?

[+] Ha (tushuntirish bering): Endi loyihaning istalgan qismida, buttonlarni
ishlatish uchun, components dan generic buttonni import qilib kerakli buttonga
type xususiyatini(type="delete") berishimiz yetarli !

- [ ] Yo'q

## Boshqa ma'lumotlar

Qo'shimcha ma'lumotlarni shu yerda qoldirishingiz mumkun

## Pull request checklist

PR quyidagilardan qaysi biriga to'g'ri kelsa, belgilab chiqing:

[+] Bir necha qavatli prop-drilling ishlatilmayapti [+] Konsolda error va
warning'lar tekshirildi, hech qanday error va warning yo'q [+] Har bir commit'da
jira ticketining kodi belgilangan. Misol ucun
`feat(SSP-10): mening commit xabarim` [+] Feature branch'ni master branch bilan
up-to-date saqlash uchun rebase ishlatildi. Boshqacha qilib aytganda, PR raise
qilishdan avval rebase qilingan
