// https://www.textfixer.com/tools/remove-line-breaks.php

// Дедлайн
if(
  empty(prop("срок")), 
  "🤷‍♂️ без даты", 
  if(
    (floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) == 0, 
    "❗️ сегодня", 
    if(
      (floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) == 1, 
      "⚠️ завтра", 
      if(
        (floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) == -1, 
        "😐 вчера", 
        if(
          (floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) == 2, 
          "💛 послезавтра", 
          if(
            (floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) == -2, 
            "☹️ позавчера", 
            (
              (
                if(
                  (floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) > 0, 
                  "💚 через ", 
                  "❌ просрочено на "
                ) + format(abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)))) + " ") + 
            if(
              or(
                or(
                  and(
                    (abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 10) > 4, 
                    (abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 10) < 10
                  ), 
                  (abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 10) == 0), 
                and(
                  (abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 100) > 9, 
                  (abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 100) < 20)
              ), 
              "дней", 
              if((abs(floor((timestamp(dateEnd(prop("срок"))) + 10800000) / 86400000) - floor((timestamp(now()) + 10800000) / 86400000)) % 10) == 1, "день", "дня")
            )
          )
        )
      )
    )
  )
)

// Прогресс времени
if(
  prop("текущее") and (dateStart(prop("срок")) != dateEnd(prop("срок"))), 
  (format(round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes"))) + "%") + 
  if(
  round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 10, "🟩⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️", 
  if(
    round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 20, "🟩🟩⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️", 
    if(
      round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 30, "🟩🟩🟩⬜️⬜️⬜️⬜️⬜️⬜️⬜️", 
      if(
        round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 40, "🟩🟩🟩🟨⬜️⬜️⬜️⬜️⬜️⬜️", 
        if(
          round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 50, "🟩🟩🟩🟨🟨⬜️⬜️⬜️⬜️⬜️", 
          if(
            round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 60, "🟩🟩🟩🟨🟨🟨⬜️⬜️⬜️⬜️", 
            if(
              round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 70, "🟩🟩🟩🟨🟨🟨🟧⬜️⬜️⬜️", 
              if(
                round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 80, "🟩🟩🟩🟨🟨🟨🟧🟧⬜️⬜️", 
                if(
                  round((dateBetween(now(), dateStart(prop("срок")), "minutes") * 100) / dateBetween(dateEnd(prop("срок")), dateStart(prop("срок")), "minutes")) < 90, "🟩🟩🟩🟨🟨🟨🟧🟧🟥⬜️", 
                  "🟩🟩🟩🟨🟨🟨🟧🟧🟥🟥"
                )
              )
            )
          )
        )
      )
    )
  )
), 
  ""
    )

// День недели
if(
  day(dateStart(prop("срок"))) % 7 == 0, "воскресенье", 
  if(
    day(dateStart(prop("срок"))) % 7 == 1, "понедельник", 
    if(
      day(dateStart(prop("срок"))) % 7 == 2, "вторник", 
      if(
        day(dateStart(prop("срок"))) % 7 == 3, "среда", 
        if(
          day(dateStart(prop("срок"))) % 7 == 4, "четверг", 
          if(
            day(dateStart(prop("срок"))) % 7 == 5, "пятница", 
            if(
              day(dateStart(prop("срок"))) % 7 == 6, "суббота", ""
            )
          )
        )
      )
    )
  )
)

// Текущее
or(
  formatDate(now(), "YYYY-MM-DD HH:mm") == formatDate(prop("срок"), "YYYY-MM-DD HH:mm"), 
  and(dateStart(prop("срок")) < now(), dateEnd(prop("срок")) > now())
)

// Просрочено
dateEnd(prop("срок")) < now()
