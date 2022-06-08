**Issue #:** [JIRA-1234](https://mohirpool.atlassian.net/browse/IT-1234)

## PR turi

PR'da qanday turdagi o'zgarish bo'lganini belgilang:

- [ x ] Bugfix
- [ x ] Feature
- [ x ] Kod stilida o'zgarishlar (formatting, renaming)
- [ x ] Refactor(funksional yoki api o'zgarishlari yo'q)
- [ x ] Boshqa:

## PR ko'lami

Bu PR quyidagi file'larga yangi kod qo'shgan, yoki o'zgartirish kiritgan:

- Yangi - Component InvoiceItem
- O'zgartirish - Page B
- O'zgaritirish - Component index

## Screenshots

#### oldingi holati:
image.png
#### hozirgi holati:
image.png
## Avvalgi holatni tasvirlang

- Yangi component qo'shilishidan oldin heading 1 ichida text bor edi xolos

## Hozirgi holatni tasvirlang

- Yangi component qo'shilgandan keyin uni import qilib va proplariga valuelar berib birdan ortiq joyda ishlatish imkoni paydo bo'ldi.

## Bu PR keskin o'zgarishlar keltirib chiqaradimi?

- [ x ] Ha (tushuntirish bering): agar u import qilinib uning prioplariga value berilsa user interfeysda sezilarli o'zgarishlar ko'rinadi.
- [ x ] Yo'q

## Boshqa ma'lumotlar

Qo'shimcha ma'lumotlarni shu yerda qoldirishingiz mumkun

## Pull request checklist

PR quyidagilardan qaysi biriga to'g'ri kelsa, belgilab chiqing:

- [ x ] Bir necha qavatli prop-drilling ishlatilmayapti
- [ x ] Konsolda error va warning'lar tekshirildi, hech qanday error va warning
      yo'q
- [ x ] Har bir commit'da jira ticketining kodi belgilangan. Misol ucun
      `feat(SSP-10): mening commit xabarim`
- [ x ] Feature branch'ni master branch bilan up-to-date saqlash uchun rebase
      ishlatildi. Boshqacha qilib aytganda, PR raise qilishdan avval rebase
      qilingan
