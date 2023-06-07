if(
  empty(prop("Срок")),
  "🤷‍♂️ без даты",
  if(
    dateBetween(end(prop("Срок")), now(), "days") == 0,
    "❗️ сегодня",
    if(
      dateBetween(end(prop("Срок")), now(), "days") == 1,
      "⚠️ завтра",
      if(
        dateBetween(end(prop("Срок")), now(), "days") == -1,
        "😐 вчера",
        if(
          dateBetween(end(prop("Срок")), now(), "days") == 2,
          "💛 послезавтра",
          if(
            dateBetween(end(prop("Срок")), now(), "days") == -2,
            "☹️ позавчера",
            if(
              dateBetween(end(prop("Срок")), now(), "days") > 0,
              "💚 через ",
              "❌ просрочено на "
            ) + format(abs(dateBetween(end(prop("Срок")), now(), "days"))) + " " + if(
              or(
                or(
                  and(abs(dateBetween(end(prop("Срок")), now(), "days")) % 10 > 4, abs(dateBetween(end(prop("Срок")), now(), "days")) % 10 < 10),
                  abs(dateBetween(end(prop("Срок")), now(), "days")) % 10 == 0
                ),
                and(abs(dateBetween(end(prop("Срок")), now(), "days")) % 100 > 9, abs(dateBetween(end(prop("Срок")), now(), "days")) % 100 < 20)
              ),
              "дней",
              if(abs(dateBetween(end(prop("Срок")), now(), "days")) % 10 == 1, "день", "дня")
            )
          )
        )
      )
    )
  )
)

#https://www.textfixer.com/tools/remove-line-breaks.php


or(
  contains(prop("Дедлайн"), "❌") or contains(prop("Дедлайн"), "😐"), contains(prop("Дедлайн") "☹️")
  )

or(
  contains(prop("Дедлайн"), "❌"),
  or(
    contains(prop("Дедлайн"), "😐"),
    contains(prop("Дедлайн") "☹️")
  )
)