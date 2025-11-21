fetch("https://leetcode.com/graphql/", {
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    authorization: "",
    baggage:
      "sentry-environment=production,sentry-release=18e889d6,sentry-transaction=%2Fu%2F%5Busername%5D,sentry-public_key=2a051f9838e2450fbdd5a77eb62cc83c,sentry-trace_id=e3d16ae73c2f42ea9f1cb9fe1445e0a4,sentry-sample_rate=0.03",
    "content-type": "application/json",
    priority: "u=1, i",
    "random-uuid": "799d98a4-6639-bb9e-1f7a-6aef15b519dc",
    "sec-ch-ua":
      '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"142.0.7444.60"',
    "sec-ch-ua-full-version-list":
      '"Chromium";v="142.0.7444.60", "Google Chrome";v="142.0.7444.60", "Not_A Brand";v="99.0.0.0"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua-platform-version": '"19.0.0"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sentry-trace": "e3d16ae73c2f42ea9f1cb9fe1445e0a4-8a64dfaabaeda775-0",
    "x-csrftoken": "UZyQS5bTahoMleek1hz2k68sVysesbak",
    cookie:
      '__stripe_mid=68ee7f6b-7a75-4ea6-9678-941f8902b749fe66fe; cf_clearance=hnqisxHNABSTpr832W8S0AqNFU.w73hd6xZk0PUT94Y-1763045000-1.2.1.1-a3i5nYDgEpXkAldEYp7hYbGU57.mbZ7dj8TeunEabV4mZuToYsi86Q2gTwa.o8n5XY_byMhCi.bwp4eAFk4NW1Nz.yaE3Bxp9tnGyiLsLf_Vuvcj2Scc5XRBQ6I5pq02PAZOEuOnLprnX7JcHTVVRx8SpigTFvO.bjeb95sTwtI6gkgrz1EiyA60zCf7UiZzXEcnanzt66pxD2iCq0xjQNT54QImeSGiDN6P3e5ou50; csrftoken=UZyQS5bTahoMleek1hz2k68sVysesbak; messages=W1siX19qc29uX21lc3NhZ2UiLDAsMjUsIlN1Y2Nlc3NmdWxseSBzaWduZWQgaW4gYXMgYWRpdHlhX3J3MS4iLCIiXV0:1vJYXk:ZOdKfb9TJR6GWqzTgnIPBRLiaoyF4uNm-JrFnOr08wE; LEETCODE_SESSION=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYXV0aF91c2VyX2lkIjoiMTY0OTkxNjIiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJhbGxhdXRoLmFjY291bnQuYXV0aF9iYWNrZW5kcy5BdXRoZW50aWNhdGlvbkJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI5ZTI0NDg4NDcxMGEwYTRkYmE5NzYxZTkzZTYyZWM4NzZiMjFjNmQ0MWJhMmQ3ZTRiOGNkNTI4ODI0NGY2YmQzIiwic2Vzc2lvbl91dWlkIjoiMDcwN2UyYWUiLCJpZCI6MTY0OTkxNjIsImVtYWlsIjoiYWRpdHlhcmF3YXRuZXcyNDg3QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoicGI1eVBGQmdpdSIsInVzZXJfc2x1ZyI6InBiNXlQRkJnaXUiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvcGI1eVBGQmdpdS9hdmF0YXJfMTc2MDU0NTYzMS5wbmciLCJyZWZyZXNoZWRfYXQiOjE3NjM2OTYzMDcsImlwIjoiMjQwOTo0MGM0OjIxYzE6OTY2OjE1YTI6YzZkOjhhZmE6NzE1NyIsImlkZW50aXR5IjoiM2M5ZmM3ZGRlYzliNTg4MjNjMWM5Njc1NmRiZDQ1ZDgiLCJkZXZpY2Vfd2l0aF9pcCI6WyI5ZDgwYmQ1OTQzOWUyOGM1NjQyNjQ1NjZiZGNmNmRmZiIsIjI0MDk6NDBjNDoyMWMxOjk2NjoxNWEyOmM2ZDo4YWZhOjcxNTciXX0.txkCzChp4SYs4IsrPLZZC6NZe-0ifU_HbMKeYFXCiMM; ip_check=(false, "2409:40c4:21c1:966:15a2:c6d:8afa:7157"); INGRESSCOOKIE=d21dabcd3d942fc15ea17a10c3f9fa15|8e0876c7c1464cc0ac96bc2edceabd27',
    Referer: "https://leetcode.com/u/pb5yPFBgiu/",
  },
  body: '{"query":"\\n    query userBadges($username: String!) {\\n  matchedUser(username: $username) {\\n    badges {\\n      id\\n      name\\n      shortName\\n      displayName\\n      icon\\n      hoverText\\n      medal {\\n        slug\\n        config {\\n          iconGif\\n          iconGifBackground\\n        }\\n      }\\n      creationDate\\n      category\\n    }\\n    upcomingBadges {\\n      name\\n      icon\\n      progress\\n    }\\n  }\\n}\\n    ","variables":{"username":"pb5yPFBgiu"},"operationName":"userBadges"}',
  method: "POST",
});
