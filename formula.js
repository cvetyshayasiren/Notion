// Дедлайн
// https://www.textfixer.com/tools/remove-line-breaks.php

if(
  empty(prop("Срок")),
  "🤷‍♂️ без даты",
  if(
    floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7) == 0,
    "❗️ сегодня",
    if(
      floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7) == 1,
      "⚠️ завтра",
      if(
        floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7) == -1,
        "😐 вчера",
        if(
          floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7) == 2,
          "💛 послезавтра",
          if(
            floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7) == -2,
            "☹️ позавчера",
            if(
              floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7) > 0,
              "💚 через ",
              "❌ просрочено на "
            ) + format(abs(floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7))) + " " + if(
              or(
                or(
                  and(
                    abs(floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7)) % 10 > 4, 
                    abs(floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7)) % 10 < 10
                  ),
                  abs(floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7)) % 10 == 0
                ),
                and(
                  abs(floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7)) % 100 > 9, 
                  abs(floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7)) % 100 < 20
                )
              ),
              "дней",
              if(abs(floor((timestamp(end(prop("Срок"))) + 1.08e+7) / 8.64e+7) - floor((timestamp(now()) + 1.08e+7) / 8.64e+7)) % 10 == 1, "день", "дня")
            )
          )
        )
      )
    )
  )
)

// Прогресс времени
if(
  prop("Текущее") and start(prop("Срок")) != end(prop("Срок")),
  format(round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes"))) + "%" +
  if(
    round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 10, "🟩⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️", 
    if(
      round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 20, "🟩🟩⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️", 
      if(
        round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 30, "🟩🟩🟩⬜️⬜️⬜️⬜️⬜️⬜️⬜️", 
        if(
          round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 40, "🟩🟩🟩🟨⬜️⬜️⬜️⬜️⬜️⬜️", 
          if(
            round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 50, "🟩🟩🟩🟨🟨⬜️⬜️⬜️⬜️⬜️", 
            if(
              round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 60, "🟩🟩🟩🟨🟨🟨⬜️⬜️⬜️⬜️", 
              if(
                round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 70, "🟩🟩🟩🟨🟨🟨🟧⬜️⬜️⬜️", 
                if(
                  round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 80, "🟩🟩🟩🟨🟨🟨🟧🟧⬜️⬜️", 
                  if(
                    round(dateBetween(now(), start(prop("Срок")), "minutes") * 100 / dateBetween(end(prop("Срок")), start(prop("Срок")), "minutes")) < 90, "🟩🟩🟩🟨🟨🟨🟧🟧🟥⬜️", 
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
  day(start(prop("Срок"))) == 0, "7 Вс", 
  if(
    day(start(prop("Срок"))) == 1, "1 Пн", 
    if(
      day(start(prop("Срок"))) == 2, "2 Вт", 
      if(
        day(start(prop("Срок"))) == 3, "3 Ср", 
        if(
          day(start(prop("Срок"))) == 4, "4 Чт", 
          if(
            day(start(prop("Срок"))) == 5, "5 Пт", 
            if(
              day(start(prop("Срок"))) == 6, "6 Сб", ""
            )
          )
        )
      )
    )
  )
)

// Текущее
or(
  formatDate(now(), "MMMM D, YYYY") == formatDate(prop("Срок"), "MMMM D, YYYY"), 
  and(start(prop("Срок")) < now(), end(prop("Срок")) > now())
)

// Просрочено
end(prop("Срок")) < now()
