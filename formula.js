// https://www.textfixer.com/tools/remove-line-breaks.php

// Дедлайн
ifs(
  prop("статус") == "выполнено", "",
  prop("статус") == "архив", "",
  prop("статус") == "отменено", "",
  empty(prop("срок")), "",
  floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000) == 0, "❗️ сегодня",
  floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000) == 1, "⚠️ завтра", 
  floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000) == -1, "😐 вчера", 
  floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000) == 2, "💛 послезавтра",
  floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000) == -2, "☹️ позавчера", 
  if(
  floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000) > 0, "💚 через ", "❌ просрочено на "
  ) + format(abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) + " ") +
  if(
    or(
      or(
        and(
          abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 10 > 4, 
          abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 10 < 10
        ), 
        abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 10 == 0
      ), 
      and(
        abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 100 > 9, 
        abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 100 < 20
      )
    ), 
    "дней", 
    if(abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 10 == 1, "день", "дня")
  )
)

// Прогресс времени
if(
  and(dateStart(prop("срок")) < now(), dateEnd(prop("срок")) > now()), 
    ifs(
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 10, "🟩🔲🔲🔲🔲🔲🔲🔲🔲🔲",
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 20, "🟩🟩🔲🔲🔲🔲🔲🔲🔲🔲",
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 30, "🟩🟩🟩🔲🔲🔲🔲🔲🔲🔲",
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 40, "🟩🟩🟩🟨🔲🔲🔲🔲🔲🔲",
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 50, "🟩🟩🟩🟨🟨🔲🔲🔲🔲🔲",
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 60, "🟩🟩🟩🟨🟨🟨🔲🔲🔲🔲",
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 70, "🟩🟩🟩🟨🟨🟨🟧🔲🔲🔲",
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 80, "🟩🟩🟩🟨🟨🟨🟧🟧🔲🔲",
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 90, "🟩🟩🟩🟨🟨🟨🟧🟧🟥🔲",
    "🟩🟩🟩🟨🟨🟨🟧🟧🟥🟥"
  ) + " " + padStart(format(round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes"))), 2, "0") + "%", 
  ""
)

// День недели
ifs(
  day(dateStart(prop("срок"))) % 7 == 0, "7 воскресенье",
  day(dateStart(prop("срок"))) % 7 == 1, "1 понедельник",
  day(dateStart(prop("срок"))) % 7 == 2, "2 вторник",
  day(dateStart(prop("срок"))) % 7 == 3, "3 среда",
  day(dateStart(prop("срок"))) % 7 == 4, "4 четверг",
  day(dateStart(prop("срок"))) % 7 == 5, "5 пятница",
  day(dateStart(prop("срок"))) % 7 == 6, "6 суббота",
  ""
)

// Просрочено
dateEnd(prop("срок")) < now()
