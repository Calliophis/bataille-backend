-- CreateTable
CREATE TABLE "game_scores" (
    "game_id" INTEGER NOT NULL,
    "player_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "game_scores_pkey" PRIMARY KEY ("game_id","player_id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "games_id_key" ON "games"("id");

-- CreateIndex
CREATE UNIQUE INDEX "players_id_key" ON "players"("id");

-- CreateIndex
CREATE UNIQUE INDEX "players_name_key" ON "players"("name");

-- AddForeignKey
ALTER TABLE "game_scores" ADD CONSTRAINT "game_scores_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_scores" ADD CONSTRAINT "game_scores_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

