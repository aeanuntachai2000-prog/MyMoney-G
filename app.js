
let entries = [...window.journalDemoData];

const $ = id => document.getElementById(id);

const money = value =>
  Number(value).toLocaleString("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

function renderJournal() {
  const query = $("searchInput").value.toLowerCase();
  const type = $("typeFilter").value;
  const status = $("statusFilter").value;

  const filtered = entries.filter(item => {
    const text = [
      item.doc,
      item.description,
      item.detail
    ].join(" ").toLowerCase();

    return (!query || text.includes(query))
      && (!type || item.type === type)
      && (!status || item.status === status);
  });

  $("journalTable").innerHTML = filtered.map(item => {
    const typeClass = {
      "รายรับ": "income",
      "รายจ่าย": "expense",
      "โอนเงิน": "transfer",
      "ปรับปรุง": "adjust"
    }[item.type];

    return `
      <tr>
        <td>
          <div class="doc-number">${item.doc}</div>
          <div class="sub">${item.date}</div>
        </td>
        <td>
          <div>${item.description}</div>
          <div class="sub">${item.detail}</div>
        </td>
        <td>
          <span class="tag ${typeClass}">${item.type}</span>
        </td>
        <td class="number">${money(item.debit)}</td>
        <td class="number">${money(item.credit)}</td>
        <td>
          <span class="status ${item.status}">
            ${item.status === "posted" ? "ผ่านรายการ" : "ฉบับร่าง"}
          </span>
        </td>
        <td>⋯</td>
      </tr>
    `;
  }).join("");

  $("emptyMessage").hidden = filtered.length > 0;
  $("resultCount").textContent =
    `แสดง ${filtered.length} จาก ${entries.length} รายการ`;

  $("totalEntries").textContent =
    String(entries.length).padStart(2, "0");
}

["searchInput", "typeFilter", "statusFilter"].forEach(id => {
  $(id).addEventListener("input", renderJournal);
});

$("resetBtn").addEventListener("click", () => {
  $("searchInput").value = "";
  $("typeFilter").value = "";
  $("statusFilter").value = "";
  renderJournal();
});

const modal = $("modal");

function closeModal() {
  modal.hidden = true;
}

$("addBtn").addEventListener("click", () => {
  modal.hidden = false;
  $("entryDate").value = new Date().toISOString().slice(0, 10);
});

$("closeModal").addEventListener("click", closeModal);
$("cancelModal").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

$("entryForm").addEventListener("submit", event => {
  event.preventDefault();

  const debit = Number($("entryDebit").value);
  const credit = Number($("entryCredit").value);

  if (Math.abs(debit - credit) > 0.001) {
    alert("ยอดเดบิตและเครดิตต้องเท่ากันในต้นแบบนี้");
    return;
  }

  const date = new Date($("entryDate").value + "T00:00:00");

  entries.unshift({
    date: date.toLocaleDateString("th-TH", {
      day: "2-digit",
      month: "short",
      year: "2-digit"
    }),
    doc: "JV-DEMO-" + String(entries.length + 1).padStart(3, "0"),
    description: $("entryDescription").value,
    detail: "เพิ่มจาก UI Lab",
    type: $("entryType").value,
    debit,
    credit,
    status: "draft"
  });

  renderJournal();
  event.target.reset();
  closeModal();
});

$("exportBtn").addEventListener("click", () => {
  const header = "วันที่,เลขที่เอกสาร,รายละเอียด,ประเภท,เดบิต,เครดิต,สถานะ";

  const lines = entries.map(item =>
    [
      item.date,
      item.doc,
      item.description,
      item.type,
      item.debit,
      item.credit,
      item.status
    ].map(value =>
      `"${String(value).replaceAll('"', '""')}"`
    ).join(",")
  );

  const csv = [header, ...lines].join("\n");

  const blob = new Blob(
    ["\uFEFF" + csv],
    { type: "text/csv;charset=utf-8" }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "mymoney-journal-demo.csv";
  link.click();

  URL.revokeObjectURL(url);
});

renderJournal();
