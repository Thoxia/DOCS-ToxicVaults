---
title: Bank - Banka modülü
---

## Lonca Bankası Modülü

### Nedir?

- Lonca bankası modülü, lonca üyelerinin ortak bir lonca kasasına para yatırmalarını ve buradan para çekmelerini sağlayarak ortak bir lonca bankası oluşturur.

### Özellikler

- Lonca lideri, hangi rütbeye sahip oyuncuların lonca bankasından para çekebileceğini ayarlayabilir.
- Lonca bankasına para yatıran veya çeken üyelerin isimleri görünür.
- PlaceholderAPI desteği.

### Komutlar

#### Oyuncu Komutları

- `/guildbank deposit <miktar>` - Belirtilen miktarda parayı lonca bankasına yatırır.
- `/guildbank withdraw <miktar>` - Belirtilen miktarda parayı lonca bankasından çeker.
- `/guildbank rank <rütbe>` - Lonca liderinin, lonca bankasından para çekebilecek rütbeleri ayarlamasını sağlar.

#### Admin Komutları

- `/adminguild deletebank <isim>` - Belirtilen loncaya ait bankayı siler.
- `/adminguild showbalance <isim>` - Belirtilen loncanın toplam banka bakiyesini gösterir.

### PlaceholderAPI

- `%rguilds_balance%` - Oyuncunun bağlı olduğu loncanın bankasındaki bakiyeyi gösterir.

### Görseller

![bank_1](../../../../../assets/rguilds/modules/bank/bank_1.png)
![bank_2](../../../../../assets/rguilds/modules/bank/bank_2.png)
