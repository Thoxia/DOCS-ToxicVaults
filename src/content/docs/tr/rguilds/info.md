---
title: "RGuilds"
---

## RGuilds - Gelişmiş Lonca Eklentisi

- Sunucuya benzersiz bir aksiyon katarak oyuncularınıza sunucuda bir ekip kurma olanağı sağlar!

### Özellikler
- Tüm ayarlar ve mesajlar özelleştirilebilir.
- Lonca oluşturma ücreti ayarlama:
    - Vault, PlayerPoints veya ücretsiz seçenekler mevcut.
- PlaceholderAPI desteği:
    - Eklenti içerisinde birçok placeholder desteği mevcuttur!
- Lonca rütbe sistemi:
    - Lonca içinde Lider, Moderator ve Üye olmak üzere 3 adet yetkilendirme sistemi mevcuttur.
- Cross Server (Çoklu Sunucu) desteği:
    - Lonca eklentisi çoklu sunucu desteğini %100 destekler. Redis gereklidir!
    - Oyuncular sunucular arasında birbirlerine davet gönderebilir, birbirlerine lonca üzerinden mesaj gönderebilir ve daha fazlasını yapabilirler.
- Modül desteği:
    - Eklenti içinde isteğe bağlı olarak (ücretli veya ücretsiz) modül desteği mevcuttur.
- GUI desteği:
    - Eklenti içinde birçok alan GUI ile eşlik edilmektedir.
    - Oyunculara görsel açıdan zengin ve sade bir tasarım sunabilirsiniz.
    - Custom-model-data destekler!
- Depolama:
    - SQLite ve MySQL desteği mevcuttur.
- Lonca adı değiştirme:
    - Türkçe karakterler ve boşluklar desteklenir.
    - Otomatik olarak değişik harfler ve noktalama işaretlerini engeller.
- Lonca PvP sistemi:
    - Lonca içinde üyeler birbirleriyle eğer lider izin verirse savaşabilirler.
- Lonca Savaş sistemi:
    - Lonca liderleri birbirlerine savaş başlatabilir ve hangi loncayla düşman olduklarını oyuncular görebilir.
- Lonca seviye sistemi:
    - Lonca içinde seviye ve XP sistemi bulunur. Sınırsız seviye ayarlanabilir.
    - Herhangi bir canlının veya oyuncunun kaç puan verebileceği ayarlanabilir.
    - Her seviye için bir üye sınırı eklenebilir.
- Lonca flama sistemi:
    - Lonca içinde lider bir lonca arması seçebilir ve düşmanlarının bunu görmesini sağlayabilir.
- Discord webhook desteği:
    - Bir lonca savaş başlattığında veya bitirdiğinde Discord webhook gönderme.

### Bağımlılıklar

- RozsLib - Eklentinin çalışması için gerekli zorunlu eklentidir!
- Vault - Ekonomi için ana eklentidir (isteğe bağlıdır).
- PlaceholderAPI - RozsLib için gereklidir ve eklenti içindeki placeholder sistemi için gereklidir.

### Komutlar

**Oyuncu Komutları**

`/guild create <name>` - Lonca kurulmasını sağlar.  
`/guild join <player>` - Davet gönderen oyuncunun loncasına katılmasını sağlar.  
`/guild invite <player>` - Bir oyuncuya davet gönderir.  
`/guild leave` - Bağlı olduğu loncadan ayrılır.  
`/guild kick <player>` - Oyuncuyu loncadan atar.  
`/guild message <message>` - Tüm lonca üyelerine bir mesaj gönderir.  
`/guild rename <name>` - Lonca ismini günceller.  
`/guild war start/end <name>` - Bir loncaya savaş başlatır/durdurur.  
`/guildwar banner` - Elinde tuttuğu flamayı lonca flaması olarak ayarlar.

**Admin Komutları**

`/adminclaim delete <guildname>` - Bir loncayı siler.  
`/adminclaim show <guildname>` - Lonca bilgilerini gösterir.  
`/adminclaim forceleave <player>` - Bir oyuncuyu loncasından zorla çıkarır.  
`/adminclaim list` - Lonca listesini gösterir.  
`/adminclaim level set <level> <guild>` - Loncaya seviye verir.  
`/adminguild exp give <amount> <guild>` - Loncaya XP verir.  
`/adminguild exp take <amount> <guild>` - Loncadan XP alır.

### Yetkiler

`rguilds.admin` - Temel admin yetkisidir.  
`rguilds.admin.delete` - Lonca silmek için gerekli yetkidir.  
`rguilds.admin.show` - Lonca bilgilerini görmek için gerekli yetkidir.  
`rguilds.admin.forceleave` - Loncadan çıkması için zorlamak için gereken yetki.  
`rguilds.admin.list` - Lonca listesi için gerekli yetkidir.  
`rguilds.admin.level` - Lonca seviye komutları için gerekli yetkidir.  
`rguilds.admin.exp` - Lonca XP komutları için gerekli yetkidir.

### PlaceholderAPI

`%rguilds_formatted_name%` - Lonca adı (Renkli ve Yıldızlı)  
`%rguilds_unformatted_name%` - Lonca adı (Renkli ve Yıldızsız)  
`%rguilds_formatted_name_no_color%` - Lonca adı (Renksiz ve Yıldızlı)  
`%rguilds_unformatted_name_no_color%` - Lonca adı (Renksiz ve Yıldızsız)  
`%rguilds_kill_count%` - Lonca öldürme sayısı  
`%rguilds_level%` - Lonca seviyesi görünen adı  
`%rguilds_xp%` - Lonca tecrübe puanı  
`%rguilds_next_xp%` - Bir sonraki seviyeye gereken tecrübe puanı  
`%rguilds_next_level_unformatted%` - Bir sonraki seviye formatsız adı  
`%rguilds_next_level_formatted%` - Bir sonraki seviye görünen adı  
`%rguilds_top_xp_<number>_<name/point>%` - Loncalar arası XP sıralaması  
`%rguilds_top_kill_<number>_<name/point>%` - Loncalar arası öldürme sıralaması  
`%rguilds_kill_count_<lonca>%` - Bir loncanın öldürme sayısını gösterir  
`%rguilds_xp_<lonca>%` - Bir loncanın tecrübe puanını gösterir  
`%rguilds_level_<lonca>%` - Bir loncanın seviyesinin görünen adını gösterir  
`%rguilds_level_unformatted_<lonca>%` - Bir loncanın seviyesinin formatsız adını gösterir  
