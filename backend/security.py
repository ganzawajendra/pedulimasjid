import hashlib
from typing import List, Dict, Any

def calculate_hash(
    index: int,
    timestamp: str,
    transaction_type: str,
    amount: float,
    evidence_hash: str,
    previous_hash: str
) -> str:
    """
    Menghitung hash SHA-256 dari payload transaksi kas.
    Rumus -> SHA-256(index + timestamp + transaction_type + amount + evidence_hash + previous_hash)
    """
    payload = f"{index}{timestamp}{transaction_type}{amount}{evidence_hash}{previous_hash}"
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()

def hash_file_bytes(file_bytes: bytes) -> str:
    """
    Menghitung hash SHA-256 dari byte data bukti fisik (nota kuitansi / foto).
    """
    return hashlib.sha256(file_bytes).hexdigest()

def verify_chain_integrity(ledger: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Memverifikasi seluruh rantai ledger transaksi dari Genesis Block hingga blok terakhir.
    """
    if not ledger or len(ledger) <= 1:
        return {"is_valid": True, "message": "Ledger masih berisi Genesis block saja / valid"}

    for i in range(1, len(ledger)):
        curr_block = ledger[i]
        prev_block = ledger[i - 1]

        # 1. Verifikasi keterikatan rantai (previous_hash blok ini == current_hash blok sebelumnya)
        if curr_block["previous_hash"] != prev_block["current_hash"]:
            return {
                "is_valid": False,
                "broken_at_index": i,
                "reason": f"Rantai terputus pada blok {i}. Previous hash tidak cocok dengan current hash sebelumnya."
            }

        # 2. Rekalkulasi integritas isi data transaksi
        recalculated_hash = calculate_hash(
            index=curr_block["index"],
            timestamp=curr_block["timestamp"],
            transaction_type=curr_block["transaction_type"],
            amount=curr_block["amount"],
            evidence_hash=curr_block["evidence_hash"],
            previous_hash=curr_block["previous_hash"]
        )

        if recalculated_hash != curr_block["current_hash"]:
            return {
                "is_valid": False,
                "broken_at_index": i,
                "reason": f"Data terbukti dimanipulasi pada blok {i}!"
            }

    return {"is_valid": True, "message": "Seluruh rantai ledger valid dan utuh (Tamper-evident verified)"}