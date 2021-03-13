function createUniversalLink() {}

      async function shareMsg() {}

      function logOut() {}

      function closed() {}

      async function scanCode() {}

      function openWindow() {}

      async function getFriendship() {}

      async function sendMsg() {
        if (
          liff.getContext().type !== "none" &&
          liff.getContext().type !== "external"
        ) {
          await liff.sendMessages([
            {
              type: "sticker",
              stickerId: 1,
              packageId: 1,
            },
          ]);
          alert("success");
        }
      }

      function getContext() {
        document.getElementById("type").append(liff.getContext().type);
        document.getElementById("viewType").append(liff.getContext().viewType); //liff type tall or ...
        document.getElementById("utouId").append(liff.getContext().utouId); // one to one
        document.getElementById("roomId").append(liff.getContext().roomId);
        document.getElementById("groupId").append(liff.getContext().groupId);
      }

      async function getUserProfile() {
        const profile = await liff.getProfile();
        document.getElementById("pictureUrl").src = profile.pictureUrl;
        document.getElementById("userId").append(profile.userId);
        document.getElementById("statusMessage").append(profile.statusMessage);
        document.getElementById("displayName").append(profile.displayName);
        document
          .getElementById("decodedIDToken")
          .append(liff.getDecodedIDToken().email);
      }

      function getEnvironment() {
        document.getElementById("os").append(liff.getOS());
        document.getElementById("language").append(liff.getLanguage());
        document.getElementById("version").append(liff.getVersion());
        document.getElementById("accessToken").append(liff.getAccessToken());
        document.getElementById("isInClient").append(liff.isInClient()); //เปิดในแอปไลน์หรือexternal

        if (liff.isInClient()) {
          document.getElementById("btnLogOut").style.display = "none";
        } else {
          document.getElementById("btnMsg").style.display = "none";
          document.getElementById("btnScanCode").style.display = "none";
          document.getElementById("btnClose").style.display = "none";
        }
      }

      async function main() {
        alert("LINE Developers x Skooldio");
        await liff.init({ liffId: "1655749684-6ZD8QKm7" });
        getEnvironment();
        getUserProfile();
        getContext();
        // getFriendship()
        // createUniversalLink()
      }
      main();